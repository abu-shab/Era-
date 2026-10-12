import { useLayoutEffect } from 'react';
import { initSite } from './motion';
import { LandscapeCover } from './overlays/LandscapeCover';
import { Preloader } from './overlays/Preloader';
import { Cookies } from './overlays/Cookies';
import { BookCallModal } from './overlays/BookCallModal';
import { MenuModal } from './overlays/MenuModal';
import { FloatingTips } from './overlays/FloatingTips';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { BenefitsIntro } from './sections/BenefitsIntro';
import { Benefits } from './sections/Benefits';
import { Quote } from './sections/Quote';
import { LocationScroll } from './sections/LocationScroll';
import { LocationMap } from './sections/LocationMap';
import { ApartmentTypes } from './sections/ApartmentTypes';
import { ApartmentInfo } from './sections/ApartmentInfo';
import { Amenities } from './sections/Amenities';
import { Interior } from './sections/Interior';
import { Architecture } from './sections/Architecture';
import { Details } from './sections/Details';
import { Cta } from './sections/Cta';
import { Footer } from './sections/Footer';

export default function App() {
  useLayoutEffect(() => initSite(), []);

  return (
    <div className="transition-wrapper">
      <LandscapeCover />
      <Preloader />
      <Cookies />
      <main className="transition-container">
        <Header />
        <Hero />
        <BenefitsIntro />
        <Benefits />
        <Quote />
        <LocationScroll />
        <LocationMap />
        <ApartmentTypes />
        <ApartmentInfo />
        <Amenities />
        <Interior />
        <Architecture />
        <Details />
        <Cta />
        <Footer />
        <BookCallModal />
        <MenuModal />
        <FloatingTips />
        <div className="floating-tips w-dyn-list">
          <div className="cms_empty-none w-dyn-empty" />
        </div>
        <div className="modal show w-dyn-list">
          <div className="cms_empty-none w-dyn-empty" />
        </div>
      </main>
    </div>
  );
}
