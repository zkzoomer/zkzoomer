import { Info } from 'lucide-react';

import TextSection from '@/components/templates/text-section';

const aboutText = (
  <div>
    Senior ZK protocol engineer with an aerospace background. Currently focused on
    institutional-grade Ethereum infrastructure, interoperability, and upgradeability. I have
    experience shipping production ZKsync (L2) protocol upgrades across Solidity smart contracts and
    Rust node infrastructure. Previously worked on custom zkVMs, protocol design, and cost-efficient
    execution paths.
    <div className="h-2" />
    Ethereum-aligned and drawn to freedom-preserving technology. Looking to push the limits of
    programmable money, with an aerospace engineering bias for systems that keep working in the real
    world.
  </div>
);

const About: React.FC = () => {
  return <TextSection symbol={<Info />} name="About" text={aboutText} />;
};

export default About;
