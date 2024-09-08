'use client';

import About from './components/about';
import Community from './components/community';
import Education from './components/education';
import Grants from './components/grants';
import Hackathons from './components/hackathons';
import Header from './components/header';
import Publications from './components/publications';
import WorkExperience from './components/work';

import ContainerLayout from '@/components/layouts/container';
import { Accordion } from '@/components/ui';

export default function Page() {
  return (
    <ContainerLayout className="flex flex-col space-y-4">
      <Header />
      <Accordion.Root type="single" defaultValue="About">
        <div className="grid gap-4">
          <About />
          <WorkExperience />
          <Education />
          <Grants />
          <Hackathons />
          <Community />
          <Publications />
        </div>
      </Accordion.Root>
    </ContainerLayout>
  );
}
