'use client';

import { Accordion } from '../ui';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type TextSectionProps = {
  symbol: React.ReactNode;
  name: string;
  text: React.ReactNode;
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const TextSection: React.FC<TextSectionProps> = ({ symbol, name, text }) => {
  return (
    <Accordion.Item value={name} className="border-none">
      <Accordion.Trigger
        className="flex h-16 items-center justify-between rounded-lg border border-gray-7 bg-gray-2/95 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition-colors hover:border-gray-8 hover:bg-gray-3/90 data-[state=open]:border-gray-8 data-[state=open]:bg-gray-3/85"
        variant="normal"
      >
        <div className="flex items-center">
          {/* Symbol */}
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-7 bg-gray-3/90 p-2 text-blue-11 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex h-6 w-6 items-center justify-center">{symbol}</div>
          </div>
          {/* Name + description */}
          <div className="ml-2.5 mr-2">
            <div className="line-clamp-1 text-ellipsis text-base font-semibold text-gray-12 md:text-lg">
              {name}
            </div>
          </div>
        </div>
      </Accordion.Trigger>
      <Accordion.Content
        className="max-w-full px-2 pb-1 pt-3 text-base leading-7 text-gray-11 md:px-4 md:text-[1.0625rem]"
        variant="normal"
      >
        <div className="w-full rounded-lg border border-gray-7/70 bg-gray-2/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          {text}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default TextSection;
