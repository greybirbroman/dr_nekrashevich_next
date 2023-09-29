import HeroSection from '@/components/HeroSection/HeroSection';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import GridGalery from '@/components/GridGalery/GridGalery';
import { getResourses } from '@/sanity/actions';

export const revalidate = 900; // seconds - 15min Server Side updating

export default async function Page() {
  const resourses = await getResourses({
    query: '',
    category: '',
    page: '1',
  });

  return (
    <>
      <HeroSection />
      <About />
      <Testimonials />
      <GridGalery list={resourses} />
    </>
  );
}
