import { FileBadge2 } from 'lucide-react';

import LogoIcon from '@/components/common/logo-icon';
import ResumeSection from '@/components/templates/resume-section';

const Grants: React.FC = () => {
  return (
    <ResumeSection
      symbol={<FileBadge2 />}
      name="Grants"
      items={[
        {
          symbol: <LogoIcon.MinaFoundation />,
          name: 'Growth Track Grantee',
          description: 'Mina Foundation',
          summary:
            'Developed an ERC-4337-inspired standard on the Mina Protocol, enabling account abstraction with non-native signatures.',
          dates: '2024',
          githubLink: 'https://github.com/zkzoomer/minaa',
          githubLinkLabel: 'View Mina account abstraction proof of concept on GitHub',
        },
        {
          symbol: <LogoIcon.EthereumFoundation />,
          name: 'PSE Grantee',
          description: 'Ethereum Foundation',
          summary:
            'Built a full-stack decentralized, private, and verifiable education platform integrating the Semaphore protocol.',
          dates: '2023',
          websiteLink: 'https://bq2.netlify.app/',
          websiteLinkLabel: 'Open private education platform demo',
          githubLink: 'https://github.com/zkzoomer/bq2',
          githubLinkLabel: 'View private education platform source on GitHub',
        },
      ]}
    />
  );
};

export default Grants;
