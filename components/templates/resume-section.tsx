'use client';

import React from 'react';

import { Accordion } from '../ui';
import ResumeItem, { ResumeItemProps } from './resume-item';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type ResumeSectionProps = {
  name: string;
  symbol: React.ReactNode;
  items: ResumeItemProps[];
};

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const ResumeSection: React.FC<ResumeSectionProps> = ({ symbol, name, items }) => {
  return (
    <Accordion.Item value={name} className="border-none">
      <Accordion.Trigger
        className="flex h-[4.5rem] items-center justify-between rounded-xl border border-gray-6 bg-gray-2 px-4"
        variant="normal"
      >
        <div className="flex items-center">
          {/* Symbol */}
          <div className="flex h-10 w-10 items-center justify-center rounded border border-gray-6 bg-gray-3 p-2 text-gray-11">
            <div className="flex h-6 w-6 items-center justify-center">{symbol}</div>
          </div>
          {/* Name + description */}
          <div className="ml-2.5 mr-2">
            <div className="line-clamp-1 text-ellipsis text-lg font-medium text-gray-12">
              {name}
            </div>
          </div>
        </div>
      </Accordion.Trigger>
      <Accordion.Content
        className="prose max-w-full px-4 pt-4 text-justify text-lg text-gray-12"
        variant="normal"
      >
        {items.map((item, index) => (
          <ResumeItem key={index} {...item} />
        ))}
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default ResumeSection;
