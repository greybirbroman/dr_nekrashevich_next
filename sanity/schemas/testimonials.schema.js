const schema = {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'published',
        title: 'PublishedAt',
        type: 'date',
        validation: (Rule) => Rule.required(),
        options: {
          hotspot: true,
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }
    ],
  };
  export default schema