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
          name: 'IEEE Paper: Proven Transaction Flow Control for zk-Rollups',
          description: 'Conference Paper',
          summary:
            'Presented a verifiable approach to transaction flow control for improving reliability in zk-rollup systems.',
          dates: '2023',
          websiteLink: 'https://ieeexplore.ieee.org/document/10316965',
          githubLink: 'https://github.com/zkzoomer/congestion-control',
        },
      ]}
    />
  );
};

export default Publications;
