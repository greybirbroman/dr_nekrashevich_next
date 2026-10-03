import { defineLive } from 'next-sanity/live'

import { readClient } from './lib/client'

export const { sanityFetch, SanityLive } = defineLive({
  client: readClient,
  serverToken: false,
  browserToken: false,
  strict: true,
})
