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
          websiteLinkLabel: 'Read Proven Transaction Flow Control for zk-Rollups on IEEE Xplore',
          githubLink: 'https://github.com/zkzoomer/congestion-control',
          githubLinkLabel: 'View transaction flow control research code on GitHub',
        },
      ]}
    />
  );
};

export default Publications;
