import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token, useCdn } from '../env'

const clientConfig = {
  apiVersion,
  dataset: dataset ?? '',
  projectId: projectId ?? '',
  useCdn,
}

export const readClient = createClient(clientConfig)

export const writeClient = createClient({
  ...clientConfig,
  token,
})
