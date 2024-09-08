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
          symbol: <LogoIcon.TermStructure />,
          name: 'ZK / Protocol Engineer',
          description: 'Term Structure',
          location: 'Taiwan',
          dates: '2023-',
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
