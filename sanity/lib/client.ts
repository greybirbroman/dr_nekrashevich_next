import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const clientConfig = {
  apiVersion,
  dataset: dataset ?? '',
  projectId: projectId ?? '',
  useCdn: true,
  perspective: 'published' as const,
  stega: false,
}

export const readClient = createClient(clientConfig)
