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
          symbol: <LogoIcon.BitcoinOS />,
          name: 'ZK / Blockchain Engineer',
          description: 'Bitcoin OS',
          location: 'Remote',
          dates: '2024-',
          githubLink: 'https://github.com/bitsnark/',
        },
        {
          symbol: <LogoIcon.TermStructure />,
          name: 'ZK / Blockchain Engineer',
          description: 'Term Structure',
          location: 'Taiwan',
          dates: '2023-2024',
          githubLink: 'https://github.com/term-structure/',
        },
        {
          symbol: <LogoIcon.Airbus />,
          name: 'Software Engineer',
          description: 'Airbus',
          location: 'Spain',
          dates: '2021',
          githubLink: 'https://github.com/zkzoomer/lidsim',
        },
      ]}
    />
  );
};

export default WorkExperience;
