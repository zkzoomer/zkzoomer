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
          dates: '2024',
          githubLink: 'https://github.com/zkzoomer/minaa',
        },
        {
          symbol: <LogoIcon.EthereumFoundation />,
          name: 'PSE Grantee',
          description: 'Ethereum Foundation',
          dates: '2023',
          websiteLink: 'https://bq2.netlify.app/',
          githubLink: 'https://github.com/zkzoomer/bq2',
        },
      ]}
    />
  );
};

export default Grants;
