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
          symbol: <LogoIcon.Micro1 />,
          name: 'Expert, AI Trainer',
          description: 'Micro1, Contractor',
          summary:
            'Designing vulnerability remediation tasks and automated tests to train and evaluate AI models.',
          location: 'Remote',
          dates: '2026',
        },
        {
          symbol: <LogoIcon.MatterLabs />,
          name: 'Senior Protocol Engineer',
          description: 'Matter Labs, Engineering Team · Rust/Backend Infrastructure',
          summary:
            'Led ZKsync v29 interoperability upgrade delivery, coordinating Rust backend and smart contract changes. Implemented execution and state logic, backward-compatible database migrations across storage, synchronization, execution, and API layers, and end-to-end integration tests.',
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
          name: 'Blockchain Engineer',
          description: 'Term Structure, Blockchain / ZK Team',
          summary:
            'Designed an upgradeable fixed-rate lending platform with offchain matching and onchain settlement. Modelled financial state transitions and invariants, built a custom zkVM execution engine, and integrated the system into an end-to-end lending and borrowing protocol.',
          location: 'Taiwan (R.O.C.)',
          dates: '2023-2024',
          githubLink: 'https://github.com/term-structure/',
          githubLinkLabel: 'View Term Structure GitHub organization',
        },
        {
          symbol: <LogoIcon.Alteia />,
          name: 'Software Engineering Intern',
          description: 'Alteia, Computer Vision Team',
          summary:
            'Built a computer vision pipeline classifying components in electrical infrastructure from drone footage.',
          location: 'France',
          dates: '2023',
        },
        {
          symbol: <LogoIcon.Airbus />,
          name: 'Software Engineering Intern',
          description: 'Airbus Defence and Space, Computer Vision Team · Flight Test Department',
          summary:
            'Built a software simulation tool for evaluating different lidar sensors under flight test scenarios.',
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
