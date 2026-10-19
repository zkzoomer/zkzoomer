import { Info } from 'lucide-react';

import TextSection from '@/components/templates/text-section';

const aboutText = (
  <div>
    Backend and blockchain engineer with 3+ years of experience designing and building financial
    infrastructure, spanning smart contracts, distributed systems, and backend services. Experience
    with execution logic, database migrations, APIs, and end-to-end integration across complex
    codebases. Background in lending, collateral management, and settlement workflows, with an
    emphasis on correctness and maintainability.
    <div className="h-2" />
    Ethereum-aligned and drawn to freedom-preserving technology, with an aerospace engineering bias
    for systems that keep working in the real world.
  </div>
);

const About: React.FC = () => {
  return <TextSection symbol={<Info />} name="About" text={aboutText} />;
};

export default About;
