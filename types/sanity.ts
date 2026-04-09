export interface GalleryPoster {
  _id: string
  title: string
  slug: string | null
  category: string
  image: string
}

export interface Testimonial {
  _id: string
  description: string
  published: string
  author: string
  city: string
}
