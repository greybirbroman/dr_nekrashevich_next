import { HeroSection } from '@/components';
import { getResourses, getTestimonials } from '@/sanity/actions';
import dinamic from 'next/dynamic';
const About = dinamic(() => import('../components/About/About'))
const Testimonials = dinamic(() => import('../components/Testimonials/Testimonials'))
const Galery = dinamic(() => import('../components/Galery/Galery'))

export const revalidate = 900; // seconds - 15min Server Side updating

export default async function Page() {
  const testimonials = await getTestimonials()
  const resourses = await getResourses({
    query: '',
    category: '',
    page: '1',
  });

  return (
    <>
      <HeroSection/>
      <About />
      <Testimonials list={testimonials}/>
      <Galery list={resourses} />
    </>
  );
}
