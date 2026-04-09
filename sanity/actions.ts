import { groq } from 'next-sanity'

import type { GalleryPoster, Testimonial } from '@/types/sanity'

import { readClient } from './lib/client'

export const getResourses = async (): Promise<GalleryPoster[]> => {
  try {
    const resources = await readClient.fetch<GalleryPoster[]>(
      groq`*[_type == "galleryPoster"]{
        _id,
        title,
        slug,
        category,
        "image": image.asset->url
      }`
    )

    return resources
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const testimonials = await readClient.fetch<Testimonial[]>(
      groq`*[_type == "testimonials"]{
        _id,
        description,
        published,
        author,
        city
      }`
    )

    return testimonials
  } catch (error) {
    console.error(error)
    return []
  }
}
