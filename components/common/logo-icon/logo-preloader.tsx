import Image from 'next/image';

import { logoImages } from './icons';

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

/**
 * Eagerly fetches every logo on page load from an off-screen, zero-size, hidden
 * container. The accordion unmounts its content until a section is opened, so
 * without this the logos only start downloading on click and pop in late. Here
 * they download up-front and share the exact same optimized URLs the accordion
 * icons request, so opening a section is an instant cache hit.
 */
const LogoPreloader: React.FC = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
      {logoImages.map((src, index) => (
        <Image key={index} src={src} alt="" width={24} height={24} loading="eager" />
      ))}
    </div>
  );
};

export default LogoPreloader;
