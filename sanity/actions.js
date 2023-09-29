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
