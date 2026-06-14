import { Info } from 'lucide-react';

import TextSection from '@/components/templates/text-section';

const aboutText = (
  <div>
    ZK protocol engineer with an aerospace background, currently focused on interoperability and
    upgradeability for institutional-grade Ethereum scaling. Previously worked on custom ZK VMs,
    protocol design, and cost-efficient execution paths. Drawn to making complex systems reliable
    enough to survive contact with production.
    <div className="h-2" />
    Freedom and Ethereum maximalist looking to push the limits of programmable money, with an
    aerospace bias for systems that keep working under real constraints.
  </div>
);

const About: React.FC = () => {
  return <TextSection symbol={<Info />} name="About" text={aboutText} />;
};

export default About;
