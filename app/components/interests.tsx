import { Compass } from 'lucide-react';

import TextSection from '@/components/templates/text-section';

const interestsText = (
  <div>
    Outside work I’m usually swimming, reading, playing Counter-Strike, or falling into long-form
    learning rabbit holes.
  </div>
);

const Interests: React.FC = () => {
  return <TextSection symbol={<Compass />} name="Interests" text={interestsText} />;
};

export default Interests;
