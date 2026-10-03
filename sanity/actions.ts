import { groq } from 'next-sanity'

import type { GalleryPoster, Testimonial } from '@/types/sanity'

import { sanityFetch } from './live'
import { urlForImage, type SanityImageSource } from './lib/image'

type GalleryPosterQueryResult = Omit<GalleryPoster, 'image'> & {
  image: SanityImageSource
}

export const getResources = async (): Promise<GalleryPoster[]> => {
  const { data } = await sanityFetch({
    query: groq`*[_type == "galleryPoster"]{
      _id,
      title,
      slug,
      category,
      image
    }`,
    perspective: 'published',
    stega: false,
  })

  return (data as unknown as GalleryPosterQueryResult[]).flatMap(
    ({ image, ...resource }) => {
      const imageUrl = urlForImage(image)?.width(1600).quality(85).url()

      return imageUrl ? [{ ...resource, image: imageUrl }] : []
    },
  )
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const { data } = await sanityFetch({
    query: groq`*[_type == "testimonials"]{
      _id,
      description,
      published,
      author,
      city
    }`,
    perspective: 'published',
    stega: false,
  })

  return data as unknown as Testimonial[]
}
