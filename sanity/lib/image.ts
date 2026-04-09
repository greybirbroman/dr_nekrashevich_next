import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

type SanityReference = {
  _ref: string
}

type SanityAsset = {
  _id?: string
  url?: string
  path?: string
  assetId?: string
  extension?: string
  [key: string]: unknown
}

type SanityImageCrop = {
  _type?: string
  left: number
  bottom: number
  right: number
  top: number
}

type SanityImageHotspot = {
  _type?: string
  width: number
  height: number
  x: number
  y: number
}

type SanityImageObject = {
  asset: SanityReference | SanityAsset
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

type SanityImageWithAssetStub = {
  asset: {
    url: string
  }
}

type SanityImageSource =
  | string
  | SanityReference
  | SanityAsset
  | SanityImageObject
  | SanityImageWithAssetStub
  | null
  | undefined

const imageBuilder = createImageUrlBuilder({
  projectId: projectId ?? '',
  dataset: dataset ?? '',
})

export const urlForImage = (source: SanityImageSource) => {
  if (!source) {
    return null
  }

  return imageBuilder.image(source).auto('format').fit('max')
}
