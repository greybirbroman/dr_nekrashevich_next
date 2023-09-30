import { getResourses, getTestimonials } from '@/sanity/actions';
import { HeroSection, About, Testimonials, Galery } from '@/components';

export const revalidate = 900; // seconds - 15min Server Side updating

export default async function Page() {
  const testimonials = await getTestimonials();
  const resourses = await getResourses({
    query: '',
    category: '',
    page: '1',
  });

  return (
    <>
      <HeroSection />
      <About />
      <Testimonials list={testimonials} />
      <Galery list={resourses} />
    </>
  );
}
