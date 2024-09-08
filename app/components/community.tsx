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
          location: 'USA',
          dates: '2024',
          websiteLink: 'https://blog.succinct.xyz/zk-residency/',
        },
        {
          symbol: <LogoIcon.MinaFoundation />,
          name: 'Mentor',
          description: 'zkIgnite Cohort 2',
          dates: '2023',
          websiteLink: 'https://minaprotocol.com/blog/cohort-2-funded-projects',
        },
      ]}
    />
  );
};

export default Community;
