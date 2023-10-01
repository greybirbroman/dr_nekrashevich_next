import dynamic from 'next/dynamic';
import { getResourses, getTestimonials } from '@/sanity/actions';
import { HeroSection } from '@/components';
const About = dynamic(() => import('../components/About/About'))
const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'))
const Galery = dynamic(() => import('../components/Galery/Galery'))


export const revalidate = 900; // seconds - 15min Server Side updating

export default async function Page() {
  const testimonials = await getTestimonials();
  const resourses = await getResourses()

  return (
    <>
      <HeroSection />
      <About />
      <Testimonials list={testimonials} />
      <Galery list={resourses} />
    </>
  );
}
