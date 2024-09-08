import { BookText } from 'lucide-react';

import LogoIcon from '@/components/common/logo-icon';
import ResumeSection from '@/components/templates/resume-section';

const Publications: React.FC = () => {
  return (
    <ResumeSection
      symbol={<BookText />}
      name="Publications"
      items={[
        {
          symbol: <LogoIcon.Ieee />,
          name: 'Conference Paper',
          description: 'IEEE',
          dates: '2023',
          websiteLink: 'https://ieeexplore.ieee.org/document/10316965',
          githubLink: 'https://github.com/zkzoomer/congestion-control',
        },
      ]}
    />
  );
};

export default Publications;
