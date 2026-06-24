import { Briefcase } from 'lucide-react';

import LogoIcon from '@/components/common/logo-icon';
import ResumeSection from '@/components/templates/resume-section';

const WorkExperience: React.FC = () => {
  return (
    <ResumeSection
      symbol={<Briefcase />}
      name="Work"
      items={[
        {
          symbol: <LogoIcon.MatterLabs />,
          name: 'Senior Protocol Engineer',
          description: 'Matter Labs',
          summary:
            'DRI for the ZKsync v29 upgrade, coordinating contract and server work for native interoperability. Productionized protocol changes across contracts, server, APIs, and integration tests while turning release branches into focused PRs.',
          location: 'Remote',
          dates: '2025-2026',
          githubLink: 'https://github.com/matter-labs/',
          githubLinkLabel: 'View Matter Labs GitHub organization',
          proofOfWork: {
            title: 'Proof of work',
            items: [
              {
                label: 'ZKsync v31 server changes PR',
                description:
                  'Server v31 support across the stack, wiring the new contracts into node, CLI, tests, and CI flows',
                href: 'https://github.com/matter-labs/zksync-era/pull/4608',
                meta: 'server #4608',
              },
              {
                label: 'Focused v31 release PRs',
                description:
                  'Turned v31 release work into focused server PRs covering protocol integration, execute-path changes, and native interoperability groundwork.',
                links: [
                  {
                    href: 'https://github.com/matter-labs/zksync-era/pull/4730',
                    meta: 'server #4730',
                  },
                  {
                    href: 'https://github.com/matter-labs/zksync-era/pull/4769',
                    meta: 'server #4769',
                  },
                  {
                    href: 'https://github.com/matter-labs/zksync-era/pull/4756',
                    meta: 'server #4756',
                  },
                ],
              },
              {
                label: 'Focused v29 release PRs',
                description:
                  'Split v29 release work into reviewable server PRs for VM changes and protocol upgrade readiness.',
                links: [
                  {
                    href: 'https://github.com/matter-labs/zksync-era/pull/4292',
                    meta: 'server #4292',
                  },
                  {
                    href: 'https://github.com/matter-labs/zksync-era/pull/4221',
                    meta: 'server #4221',
                  },
                ],
              },
              {
                label: 'Top 10 era-contracts contributor',
                description:
                  'Sustained contract-side protocol contributions to matter-labs/era-contracts, including v29 and v31 release and upgrade work.',
                links: [
                  {
                    href: 'https://github.com/matter-labs/era-contracts/pull/1419',
                    meta: 'contracts #1419',
                  },
                  {
                    href: 'https://github.com/matter-labs/era-contracts/pull/1947',
                    meta: 'contracts #1947',
                  },
                  {
                    href: 'https://github.com/matter-labs/era-contracts/graphs/contributors?from=2%2F6%2F2023&to=6%2F21%2F2026',
                    meta: 'contributors graph',
                  },
                ],
              },
            ],
          },
        },
        {
          symbol: <LogoIcon.TermStructure />,
          name: 'ZK Protocol Engineer',
          description: 'Term Structure',
          summary:
            'Designed protocol logic and implemented a custom zkVM and blockchain components for a DeFi lending and borrowing platform.',
          location: 'Taiwan (R.O.C.)',
          dates: '2023-2024',
          githubLink: 'https://github.com/term-structure/',
          githubLinkLabel: 'View Term Structure GitHub organization',
        },
        {
          symbol: <LogoIcon.Airbus />,
          name: 'Software Engineering Intern',
          description: 'Airbus Defence and Space',
          summary:
            'Developed a software simulation tool for evaluating different lidar sensors under flight test scenarios.',
          location: 'Spain',
          dates: '2021',
          githubLink: 'https://github.com/zkzoomer/lidsim',
          githubLinkLabel: 'View lidar simulation project on GitHub',
        },
      ]}
    />
  );
};

export default WorkExperience;
