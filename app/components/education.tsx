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
          name: 'MSc Aerospace Engineering',
          description: 'ISAE-SUPAERO',
          summary:
            'Major in Embedded Systems. Researched verifiable computation for embedded blockchains.',
          location: 'France',
          dates: '2021-23',
        },
        {
          symbol: <LogoIcon.Upm />,
          name: 'BSc Aerospace Engineering',
          description: 'UPM',
          summary:
            'GPA 8/10 (top 10%), Major in Aerospace Sciences and Technologies. Special distinction in 8 subjects covering Mathematics, Physics, and Computer Science.',
          location: 'Spain',
          dates: '2016-21',
        },
        {
          symbol: <LogoIcon.Upm />,
          name: 'Business Analytics',
          description: 'UPM',
          summary:
            'Coursework in data analysis, statistical modeling, and decision-oriented business systems.',
          location: 'Spain',
          dates: '2020',
        },
      ]}
    />
  );
};

export default Education;
