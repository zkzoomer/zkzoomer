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
          name: 'ETHGlobal Istanbul Hackathon Winner',
          description: 'Mina track, 4th place',
          summary:
            'Recursive proof gaming prototype using Mina with compact verifiable game state.',
          location: 'Turkey',
          dates: '2023',
          websiteLink: 'https://ethglobal.com/showcase/recursive-gaming-90co4',
          websiteLinkLabel: 'View Recursive Gaming ETHGlobal Istanbul showcase',
          githubLink: 'https://github.com/zkzoomer/recursive-gaming',
          githubLinkLabel: 'View Recursive Gaming source on GitHub',
        },
        {
          symbol: <LogoIcon.EthGlobal />,
          name: 'ETHGlobal Paris Hackathon Winner',
          description: 'Mina track, 2nd place',
          summary: 'Built a T*rnado Cash re-implementation on the Mina Protocol.',
          location: 'France',
          dates: '2023',
          websiteLink: 'https://ethglobal.com/showcase/minamix-dz9gc',
          websiteLinkLabel: 'View Minamix ETHGlobal Paris showcase',
          githubLink: 'https://github.com/zkzoomer/minamix',
          githubLinkLabel: 'View Minamix source on GitHub',
        },
        {
          symbol: <LogoIcon.Berkeley />,
          name: 'Berkeley ZKP Hackathon Winner',
          description: 'Self track, 2nd place',
          summary: 'Developed an early prototype for an open and private education platform.',
          dates: '2023',
          websiteLink: 'https://rdi.berkeley.edu/zkp-web3-hackathon/',
          websiteLinkLabel: 'View Berkeley ZKP Hackathon event page',
          githubLink: 'https://github.com/zkzoomer/bq2',
          githubLinkLabel: 'View BQ2 prototype source on GitHub',
        },
        {
          symbol: <LogoIcon.ProtocolLabs />,
          name: 'Filecoin Web3 Infinity Hackathon Winner',
          description: 'Filecoin track, 3rd place',
          summary:
            'Dynamic and customizable NFT Business Cards loosely inspired by the fabled scene from American Psycho.',
          dates: '2022',
          websiteLink: 'https://devpost.com/software/dorsia-club',
          websiteLinkLabel: 'View Dorsia Club Devpost project',
          githubLink: 'https://github.com/zkzoomer/dorsiaclub',
          githubLinkLabel: 'View Dorsia Club source on GitHub',
        },
      ]}
    />
  );
};

export default Hackathons;
