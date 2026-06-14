import { UsersRound } from 'lucide-react';

import LogoIcon from '@/components/common/logo-icon';
import ResumeSection from '@/components/templates/resume-section';

const Community: React.FC = () => {
  return (
    <ResumeSection
      symbol={<UsersRound />}
      name="Community"
      items={[
        {
          symbol: <LogoIcon.Succinct />,
          name: 'ZK Residency Attendee',
          description: 'Succinct',
          summary:
            'Joined a focused ZK research and engineering residency with builders from across the industry.',
          location: 'USA',
          dates: '2024',
          websiteLink: 'https://blog.succinct.xyz/zk-residency/',
          githubLink:
            'https://github.com/succinctlabs/zk-residency/blob/main/projects/zk-auction/zk-auction.md',
        },
        {
          symbol: <LogoIcon.MinaFoundation />,
          name: 'Mentor',
          description: 'zkIgnite Cohort 2',
          summary:
            'Mentored early Mina ecosystem teams on technical direction, architecture, and ZK application design.',
          dates: '2023',
          websiteLink: 'https://minaprotocol.com/blog/cohort-2-funded-projects',
        },
      ]}
    />
  );
};

export default Community;
