import { Code2 } from 'lucide-react';

import { Accordion } from '@/components/ui';

const skillGroups = [
  {
    name: 'Core',
    items: ['ZK', 'Rollups', 'zkVMs', 'Ethereum', 'EVM'],
  },
  {
    name: 'Programming',
    items: ['Rust', 'Solidity', 'Circom', 'Python', 'TypeScript'],
  },
  {
    name: 'Tools',
    items: ['Git', 'Docker', 'Linux'],
  },
  {
    name: 'Languages',
    items: ['Spanish native', 'English C2', 'French B1'],
  },
];

const skillsIndexText = skillGroups
  .map((group) => `${group.name}: ${group.items.join(', ')}`)
  .join('; ');

const Skills: React.FC = () => {
  return (
    <Accordion.Item value="Skills" className="border-none">
      <Accordion.Trigger
        className="flex h-16 items-center justify-between rounded-lg border border-gray-7 bg-gray-2/95 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition-colors hover:border-gray-8 hover:bg-gray-3/90 data-[state=open]:border-gray-8 data-[state=open]:bg-gray-3/85"
        variant="normal"
      >
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-7 bg-gray-3/90 p-2 text-blue-11 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex h-6 w-6 items-center justify-center">
              <Code2 />
            </div>
          </div>
          <div className="ml-2.5 mr-2">
            <div className="line-clamp-1 text-ellipsis text-base font-semibold text-gray-12 md:text-lg">
              Skills
            </div>
          </div>
        </div>
      </Accordion.Trigger>
      <p className="sr-only" aria-hidden="true">
        Skills: {skillsIndexText}
      </p>
      <Accordion.Content
        className="max-w-full px-2 pb-1 pt-3 text-base leading-7 text-gray-11 md:px-4 md:text-[1.0625rem]"
        variant="normal"
      >
        <div className="rounded-lg border border-gray-7/70 bg-gray-2/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="grid gap-3 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.name} className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-10">
                  {group.name}
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-gray-7/70 bg-gray-3/55 px-2 py-1 text-xs leading-4 text-gray-11"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default Skills;
