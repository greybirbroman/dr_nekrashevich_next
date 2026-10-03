import About from '@/components/About/About'
import Galery from '@/components/Galery/Galery'
import HeroSection from '@/components/HeroSection/HeroSection'
import Testimonials from '@/components/Testimonials/Testimonials'
import { getResources, getTestimonials } from '@/sanity/actions'

export const revalidate = 900

export default async function Page() {
  const [testimonials, resources] = await Promise.all([
    getTestimonials(),
    getResources(),
  ])

  return (
    <>
      <HeroSection />
      <About />
      <Testimonials list={testimonials} />
      <Galery list={resources} />
    </>
  )
}
