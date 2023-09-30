import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';

export const getResourses = async (params) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: 'galleryPoster',
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        slug, 
        category,
        "image": image.asset->url}`
    );
    return resources;
  } catch (e) {
    console.log(e);
  }
};

export const getTestimonials = async () => {
  try {
    const testimonials = await readClient.fetch(
      groq`*[_type == "testimonials"]{
            _id,
            description,
            published,
            author,
            city,
        }`
    );
    return testimonials;
  } catch (e) {
    console.log(e);
  }
};

export const getMainImage = async () => {
    try {
        const testimonials = await readClient.fetch(
          groq`*[_type == "heroImage"]{
               "image": image.asset->url}`
        );
        return testimonials;
      } catch (e) {
        console.log(e);
      }
}
