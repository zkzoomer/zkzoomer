import { Cpu } from 'lucide-react';

import LogoIcon from '@/components/common/logo-icon';
import ResumeSection from '@/components/templates/resume-section';

const Hackathons: React.FC = () => {
  return (
    <ResumeSection
      symbol={<Cpu />}
      name="Hackathons"
      items={[
        {
          symbol: <LogoIcon.EthGlobal />,
          name: 'Mina - 4th Place',
          description: 'ETHGlobal Istanbul',
          location: 'Turkey',
          dates: '2023',
          websiteLink: 'https://ethglobal.com/showcase/recursive-gaming-90co4',
          githubLink: 'https://github.com/zkzoomer/recursive-gaming',
        },
        {
          symbol: <LogoIcon.EthGlobal />,
          name: 'Mina - 2nd Place',
          description: 'ETHGlobal Paris',
          location: 'France',
          dates: '2023',
          websiteLink: 'https://ethglobal.com/showcase/minamix-dz9gc',
          githubLink: 'https://github.com/zkzoomer/minamix',
        },
        {
          symbol: <LogoIcon.Berkeley />,
          name: 'Self Track - 2nd Place',
          description: 'Berkely ZKP Hackathon',
          dates: '2023',
          websiteLink: 'https://rdi.berkeley.edu/zkp-web3-hackathon/',
          githubLink: 'https://github.com/zkzoomer/bq2',
        },
        {
          symbol: <LogoIcon.ProtocolLabs />,
          name: 'Filecoin - 3rd Place',
          description: 'Web3 Infinity Hackathon',
          dates: '2022',
          websiteLink: 'https://devpost.com/software/dorsia-club',
          githubLink: 'https://github.com/zkzoomer/dorsiaclub',
        },
      ]}
    />
  );
};

export default Hackathons;
