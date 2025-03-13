// app/page.js
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import Contact from '@/components/contact';
import Pricing from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import AboutMe from '@/components/aboutMe';
import CTA from '@/components/cta';


export default function Home() {
  return (
    <>
      <HeroSection />
      <Contact />
      <FeatureSection />
      <Pricing />
      <AboutMe />
      <Testimonials />
      <CTA />
    </>
  );
}