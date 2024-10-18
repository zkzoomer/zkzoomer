import { Info } from 'lucide-react';

import TextSection from '@/components/templates/text-section';

const aboutText = (
  <div>
    Versatile and self-taught blockchain engineer with a recent focus in ZK scaling solutions and a
    strong problem-solving background in aerospace. I have led the design of cost-efficient
    protocols and custom ZK VMs, with an emphasis in upgradeability.
    <div className="h-2" />
    Freedom maximalist looking to push the limits of programmable money.
  </div>
);

const About: React.FC = () => {
  return <TextSection symbol={<Info />} name="About" text={aboutText} />;
};

export default About;
