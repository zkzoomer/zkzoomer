'use client';

import About from './components/about';
import Community from './components/community';
import Education from './components/education';
import Grants from './components/grants';
import Hackathons from './components/hackathons';
import Header from './components/header';
import Interests from './components/interests';
import Publications from './components/publications';
import VectorFieldBackground from './components/vector-field-background';
import WorkExperience from './components/work';

import LogoPreloader from '@/components/common/logo-icon/logo-preloader';
import ContainerLayout from '@/components/layouts/container';
import { Accordion } from '@/components/ui';

export default function Page() {
  return (
    <>
      <VectorFieldBackground />
      <ContainerLayout className="flex flex-col space-y-4">
        <LogoPreloader />
        <Header />
        <Accordion.Root type="single" defaultValue="About" className="grid gap-4">
          <About />
          <WorkExperience />
          <Education />
          <Grants />
          <Hackathons />
          <Community />
          <Publications />
          <Interests />
        </Accordion.Root>
      </ContainerLayout>
    </>
  );
}
