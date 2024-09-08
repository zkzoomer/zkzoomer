import { GraduationCap } from 'lucide-react';

import LogoIcon from '@/components/common/logo-icon';
import ResumeSection from '@/components/templates/resume-section';

const Education: React.FC = () => {
  return (
    <ResumeSection
      symbol={<GraduationCap />}
      name="Education"
      items={[
        {
          symbol: <LogoIcon.Isae />,
          name: 'MSc. Aerospace Eng.',
          description: 'ISAE-SUPAERO',
          location: 'France',
          dates: '2021-23',
        },
        {
          symbol: <LogoIcon.Upm />,
          name: 'BSc. Aerospace Eng.',
          description: 'UPM',
          location: 'Spain',
          dates: '2016-21',
        },
        {
          symbol: <LogoIcon.Upm />,
          name: 'Business Analytics',
          description: 'UPM',
          location: 'Spain',
          dates: '2020',
        },
      ]}
    />
  );
};

export default Education;
