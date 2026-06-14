'use client';

import { useEffect, useRef } from 'react';

type PointerState = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
};

type WakePoint = {
  x: number;
  y: number;
  createdAt: number;
};

type FieldPoint = {
  x: number;
  y: number;
  flowAngle: number;
  turbulence: number;
  accent: boolean;
};

const DPR_LIMIT = 1;
const FRAME_INTERVAL_MS = 1000 / 24;
const MAX_WAKE_POINTS = 8;
const WAKE_LIFETIME_MS = 1600;
const WAKE_SAMPLE_MS = 120;

const mixAngles = (from: number, to: number, amount: number) => {
  const delta = Math.atan2(Math.sin(to - from), Math.cos(to - from));
  return from + delta * amount;
};

const VectorFieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer: PointerState = {
      x: window.innerWidth * 0.68,
      y: window.innerHeight * 0.32,
      targetX: window.innerWidth * 0.68,
      targetY: window.innerHeight * 0.32,
    };

    let width = 0;
    let height = 0;
    let frameId = 0;
    let lastFrameAt = 0;
    let lastWakeAt = 0;
    let hasPointer = false;
    let fieldPoints: FieldPoint[] = [];
    const wakePoints: WakePoint[] = [];
    const staticCanvas = document.createElement('canvas');
    const staticContext = staticCanvas.getContext('2d');

    if (!staticContext) {
      return;
    }

    const drawArrow = (
      targetContext: CanvasRenderingContext2D,
      point: FieldPoint,
      angle: number,
      magnitude: number,
      lineAlpha: number,
    ) => {
      targetContext.strokeStyle = point.accent
        ? `rgba(245, 168, 83, ${lineAlpha * 0.72})`
        : `rgba(92, 188, 255, ${lineAlpha})`;

      const shaftWidth = 0.3 + magnitude * 0.1;
      const headWidth = Math.max(0.24, shaftWidth * 0.54);
      const length = 1.9 + magnitude * 2.8;
      const headLength = Math.min(2.4, 0.65 + magnitude * 0.58);
      const vectorX = Math.cos(angle) * length;
      const vectorY = Math.sin(angle) * length;
      const startX = point.x - vectorX * 0.5;
      const startY = point.y - vectorY * 0.5;
      const endX = point.x + vectorX * 0.5;
      const endY = point.y + vectorY * 0.5;
      const headAngle = 0.42;

      targetContext.lineWidth = shaftWidth;
      targetContext.beginPath();
      targetContext.moveTo(startX, startY);
      targetContext.lineTo(endX, endY);
      targetContext.stroke();

      targetContext.lineWidth = headWidth;
      targetContext.beginPath();
      targetContext.moveTo(endX, endY);
      targetContext.lineTo(
        endX - Math.cos(angle - headAngle) * headLength,
        endY - Math.sin(angle - headAngle) * headLength,
      );
      targetContext.moveTo(endX, endY);
      targetContext.lineTo(
        endX - Math.cos(angle + headAngle) * headLength,
        endY - Math.sin(angle + headAngle) * headLength,
      );
      targetContext.stroke();
    };

    const renderStaticField = () => {
      staticCanvas.width = canvas.width;
      staticCanvas.height = canvas.height;
      staticContext.setTransform(1, 0, 0, 1, 0, 0);
      staticContext.clearRect(0, 0, width, height);
      staticContext.lineCap = 'round';
      staticContext.lineJoin = 'round';

      for (const point of fieldPoints) {
        const magnitude = 0.34 + point.turbulence * 0.18;

        drawArrow(staticContext, point, point.flowAngle, magnitude, 0.036);
      }
    };

    const drawStaticFrame = () => {
      context.clearRect(0, 0, width, height);
      context.drawImage(staticCanvas, 0, 0, width, height);
    };

    const rebuildField = () => {
      const spacing = width < 720 ? 11.5 : 13;
      const points: FieldPoint[] = [];

      for (let y = -spacing; y < height + spacing; y += spacing) {
        for (let x = -spacing; x < width + spacing; x += spacing) {
          points.push({
            x,
            y,
            flowAngle: Math.sin(x * 0.006) * 0.65 + Math.cos(y * 0.007) * 0.5,
            turbulence: Math.abs(Math.sin((x - y) * 0.011)),
            accent: Math.sin((x + y) * 0.013) > 0.82,
          });
        }
      }

      fieldPoints = points;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_LIMIT);

      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuildField();
      renderStaticField();
    };

    const draw = (time: number) => {
      if (!reducedMotion && time - lastFrameAt < FRAME_INTERVAL_MS) {
        frameId = window.requestAnimationFrame(draw);
        return;
      }

      frameId = 0;
      lastFrameAt = time;

      let pointerDistance = 0;

      if (hasPointer) {
        pointer.x += (pointer.targetX - pointer.x) * 0.14;
        pointer.y += (pointer.targetY - pointer.y) * 0.14;
        pointerDistance = Math.hypot(pointer.targetX - pointer.x, pointer.targetY - pointer.y);
      }

      for (let index = wakePoints.length - 1; index >= 0; index -= 1) {
        if (time - wakePoints[index].createdAt > WAKE_LIFETIME_MS) {
          wakePoints.splice(index, 1);
        }
      }

      drawStaticFrame();

      const drawGlow = (x: number, y: number, strength: number) => {
        const glow = context.createRadialGradient(x, y, 0, x, y, Math.min(width, height) * 0.5);
        glow.addColorStop(0, `rgba(41, 155, 255, ${0.095 * strength})`);
        glow.addColorStop(0.38, `rgba(29, 201, 176, ${0.042 * strength})`);
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        context.fillStyle = glow;
        context.fillRect(0, 0, width, height);
      };

      if (hasPointer) {
        drawGlow(pointer.x, pointer.y, 1);
      }

      if (!hasPointer && wakePoints.length === 0) {
        return;
      }

      const radius = Math.min(Math.max(width * 0.3, 260), 480);
      const radiusSquared = radius * radius;

      context.lineCap = 'round';
      context.lineJoin = 'round';

      for (const point of fieldPoints) {
        const { x, y } = point;
        let angle = point.flowAngle;
        let influence = 0;

        const addInfluence = (sourceX: number, sourceY: number, strength: number) => {
          const dx = sourceX - x;
          const dy = sourceY - y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared >= radiusSquared) {
            return;
          }

          const distance = Math.sqrt(distanceSquared);
          const localInfluence = Math.max(0, 1 - distance / radius) ** 2 * strength;

          if (localInfluence <= 0) {
            return;
          }

          influence += localInfluence;
          angle = mixAngles(angle, Math.atan2(dy, dx), Math.min(0.82, localInfluence * 0.82));
        };

        if (hasPointer) {
          addInfluence(pointer.x, pointer.y, 1);
        }

        for (const wakePoint of wakePoints) {
          const progress = Math.min(1, (time - wakePoint.createdAt) / WAKE_LIFETIME_MS);

          addInfluence(wakePoint.x, wakePoint.y, (1 - progress) ** 2 * 0.78);
        }

        const effectiveInfluence = Math.min(1.15, influence);
        if (effectiveInfluence < 0.018) {
          continue;
        }

        const magnitude = 0.34 + effectiveInfluence * 2.45 + point.turbulence * 0.18;
        const lineAlpha = 0.03 + effectiveInfluence * 0.12;

        drawArrow(context, point, angle, magnitude, lineAlpha);
      }

      if (!reducedMotion && (wakePoints.length > 0 || pointerDistance > 0.5)) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const requestDraw = () => {
      if (reducedMotion) {
        draw(performance.now());
        return;
      }

      if (!frameId) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const shouldQuietAnimation = (target: EventTarget | null) => {
      return (
        target instanceof Element &&
        Boolean(
          target.closest('button, a, input, select, textarea, [role="button"], [role="link"]'),
        )
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!hasPointer) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        hasPointer = true;
      }

      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;

      const now = performance.now();

      if (now - lastWakeAt >= WAKE_SAMPLE_MS) {
        wakePoints.push({
          x: event.clientX,
          y: event.clientY,
          createdAt: now,
        });
        lastWakeAt = now;
      }

      if (wakePoints.length > MAX_WAKE_POINTS) {
        wakePoints.splice(0, wakePoints.length - MAX_WAKE_POINTS);
      }

      requestDraw();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!shouldQuietAnimation(event.target)) {
        return;
      }

      wakePoints.length = 0;
      pointer.x = pointer.targetX;
      pointer.y = pointer.targetY;

      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }

      drawStaticFrame();
    };

    const handleResize = () => {
      resize();
      requestDraw();
    };

    resize();
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('resize', handleResize);
    requestDraw();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        maskImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.78) 45%, rgba(0, 0, 0, 0.62))',
      }}
    />
  );
};

export default VectorFieldBackground;
