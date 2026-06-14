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
            'Building protocol infrastructure for ZK scaling, with a focus on interoperability, upgradeability, and cost-efficient execution.',
          location: 'Remote',
          dates: '2025-',
          githubLink: 'https://github.com/matter-labs/',
        },
        {
          symbol: <LogoIcon.TermStructure />,
          name: 'ZK Protocol Engineer',
          description: 'Term Structure',
          summary:
            'Designed protocol logic and implemented ZK and blockchain components for DeFi lending and borrowing.',
          location: 'Taiwan',
          dates: '2023-2024',
          githubLink: 'https://github.com/term-structure/',
        },
        {
          symbol: <LogoIcon.Airbus />,
          name: 'Software Engineer',
          description: 'Airbus Defence and Space',
          summary:
            'Developed a software simulation tool for evaluating different lidar sensors under flight test scenarios.',
          location: 'Spain',
          dates: '2021',
          githubLink: 'https://github.com/zkzoomer/lidsim',
        },
      ]}
    />
  );
};

export default WorkExperience;
