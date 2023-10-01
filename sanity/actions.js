import { groq } from 'next-sanity';
import { readClient } from './lib/client';

export const getResourses = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "galleryPoster"]{
          _id,
          title,
          slug, 
          category,
          "image": image.asset->url
        }`
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
