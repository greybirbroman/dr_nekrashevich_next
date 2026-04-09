import dynamic from 'next/dynamic'

import type { HomePageContent } from '@/types/sanity'

import { getResourses, getTestimonials } from '@/sanity/actions'
import { HeroSection } from '@/components'

const About = dynamic(() => import('../components/About/About'))
const Testimonials = dynamic(() => import('../components/Testimonials/Testimonials'))
const Galery = dynamic(() => import('../components/Galery/Galery'))

export const revalidate = 900

export default async function Page() {
  const [testimonials, resourses]: [
    HomePageContent['testimonials'],
    HomePageContent['resourses']
  ] = await Promise.all([getTestimonials(), getResourses()])

  return (
    <>
      <HeroSection />
      <About />
      <Testimonials list={testimonials} />
      <Galery list={resourses} />
    </>
  )
}
