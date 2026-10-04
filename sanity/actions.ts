import { groq } from 'next-sanity'

import type { GalleryPoster, Testimonial } from '@/types/sanity'

import { readClient } from './lib/client'
import { urlForImage, type SanityImageSource } from './lib/image'

type GalleryPosterQueryResult = Omit<GalleryPoster, 'image'> & {
  image: SanityImageSource
}

export const getResources = async (): Promise<GalleryPoster[]> => {
  const data = await readClient.fetch(groq`*[_type == "galleryPoster"]{
    _id,
    title,
    slug,
    category,
    image,
    "imageWidth": image.asset->metadata.dimensions.width,
    "imageHeight": image.asset->metadata.dimensions.height
  }`)

  return (data as unknown as GalleryPosterQueryResult[]).flatMap(
    ({ image, ...resource }) => {
      const imageUrl = urlForImage(image)?.quality(100).url()

      return imageUrl ? [{ ...resource, image: imageUrl }] : []
    },
  )
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const data = await readClient.fetch(groq`*[_type == "testimonials"]{
    _id,
    description,
    published,
    author,
    city
  }`)

  return data as unknown as Testimonial[]
}
