import { groq } from 'next-sanity'

import { sanityFetch } from '@/sanity/live'

export const revalidate = 900

export default async function sitemap() {
  const { data: latestContentUpdate } = await sanityFetch({
    query: groq`*[_type in ["galleryPoster", "testimonials"] && defined(_updatedAt)] | order(_updatedAt desc)[0]._updatedAt`,
    perspective: 'published',
    stega: false,
  })

  return [
    {
      url: 'https://msnek.ru/',
      ...(latestContentUpdate
        ? { lastModified: new Date(latestContentUpdate) }
        : {}),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
