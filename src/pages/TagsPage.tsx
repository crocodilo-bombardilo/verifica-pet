import { TagsHero } from '../components/sections/TagsHero';
import { TagsFeatures } from '../components/sections/TagsFeatures';
import { TagsHowItWorks } from '../components/sections/TagsHowItWorks';
import { TagsTestimonials } from '../components/sections/TagsTestimonials';
import { TagsPricing } from '../components/sections/TagsPricing';
import { TagsFaq } from '../components/sections/TagsFaq';

export const TagsPage = () => {
  return (
    <main>
      <TagsHero />
      <TagsFeatures />
      <TagsHowItWorks />
      <TagsTestimonials />
      <TagsPricing />
      <TagsFaq />
    </main>
  );
};
