import React from 'react';
import { Hero } from './Hero';
import { FlipCards } from './FlipCards';
import { VideoHome } from './VideoHome';
import { VideoHome2 } from './VideoHome2';
import CarouselNew from './CarouselNew';
import WorkflowSteps from './WorkflowSteps';
import Integration from './Integration';
import ContactSection from './ContactSection';
import AccessibilityMenu from './AccessibilityMenu'

function HomePage({ lang, t }) {

  return (
    <div className="home-page">
      <AccessibilityMenu />
      <Hero t={t}/>
      <CarouselNew t={t} />
      <WorkflowSteps t={t} />
      <VideoHome />
      <Integration t={t} />
      <FlipCards t={t} lang={lang}/>
      <VideoHome2/>
      <ContactSection t={t} />
    </div>
  );
}

export default HomePage;