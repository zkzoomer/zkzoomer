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
          summary:
            'Recursive proof gaming prototype using Mina with compact verifiable game state.',
          location: 'Turkey',
          dates: '2023',
          websiteLink: 'https://ethglobal.com/showcase/recursive-gaming-90co4',
          githubLink: 'https://github.com/zkzoomer/recursive-gaming',
        },
        {
          symbol: <LogoIcon.EthGlobal />,
          name: 'Mina - 2nd Place',
          description: 'ETHGlobal Paris',
          summary: 'Built a T*rnado Cash re-implementation on the Mina Protocol.',
          location: 'France',
          dates: '2023',
          websiteLink: 'https://ethglobal.com/showcase/minamix-dz9gc',
          githubLink: 'https://github.com/zkzoomer/minamix',
        },
        {
          symbol: <LogoIcon.Berkeley />,
          name: 'Self Track - 2nd Place',
          description: 'Berkeley ZKP Hackathon',
          summary: 'Developed an early prototype for an open and private education platform.',
          dates: '2023',
          websiteLink: 'https://rdi.berkeley.edu/zkp-web3-hackathon/',
          githubLink: 'https://github.com/zkzoomer/bq2',
        },
        {
          symbol: <LogoIcon.ProtocolLabs />,
          name: 'Filecoin - 3rd Place',
          description: 'Web3 Infinity Hackathon',
          summary:
            'Dynamic and customizable NFT Business Cards loosely inspired by the fabled scene from American Psycho.',
          dates: '2022',
          websiteLink: 'https://devpost.com/software/dorsia-club',
          githubLink: 'https://github.com/zkzoomer/dorsiaclub',
        },
      ]}
    />
  );
};

export default Hackathons;
