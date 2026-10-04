import About from '@/components/About/About'
import Galery from '@/components/Galery/Galery'
import HeroSection from '@/components/HeroSection/HeroSection'
import Services from '@/components/Services/Services'
import SiteEntranceMotion from '@/components/SiteEntranceMotion/SiteEntranceMotion'
import Testimonials from '@/components/Testimonials/Testimonials'
import TrustStrip from '@/components/TrustStrip/TrustStrip'
import { getResources, getTestimonials } from '@/sanity/actions'

export default async function Page() {
  // const [testimonials, resources] = await Promise.all([
  //   getTestimonials(),
  //   getResources(),
  // ])

  const testimonials = await getTestimonials();

  return (
    <>
      <HeroSection />
      <TrustStrip />
      <About />
      <Services />
      <Testimonials list={testimonials} />
      {/* <Galery list={resources} /> */}
      <SiteEntranceMotion />
    </>
  )
}
