'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkSection from '../components/WorkSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}