import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Testimonials } from '../components/sections/Testimonials';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Pricing } from '../components/sections/Pricing';
import { Faq } from '../components/sections/Faq';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <Faq />
    </main>
  );
};
