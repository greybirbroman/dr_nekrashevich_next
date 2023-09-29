const schema = {
  name: 'galleryPlaylist',
  title: 'Gallery Playlist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resourses',
      title: 'Resourses',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'galleryPoster' }] }],
    },
  ],
};

export default schema
