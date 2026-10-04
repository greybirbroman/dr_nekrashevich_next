import { groq } from 'next-sanity'

import { readClient } from '@/sanity/lib/client'

export const dynamic = 'force-static'

export default async function sitemap() {
  const latestContentUpdate = await readClient.fetch(
    groq`*[_type in ["galleryPoster", "testimonials"] && defined(_updatedAt)] | order(_updatedAt desc)[0]._updatedAt`,
  )

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
