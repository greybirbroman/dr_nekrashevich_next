

export function buildQuery(params) {
  const { type, query, category, page = 1, perPage = 10 } = params;

  const conditions = [`*[_type=="${type}"]`];

//   if (query) {
//     conditions.push(`title match "*${query}"`);
//   }

  if (category && category !== 'all') {
    conditions.push(`category == "${category}"`);
  }

  // pagination
  const offset = (page - 1) * perPage;
  const limit = perPage;

  if (conditions.length > 1) {
    return `${conditions[0]} && (${conditions
      .slice(1)
      .join(' && ')})][${offset}...${limit}]`;
  } else {
    return `${conditions[0]}[${offset}...${limit}]`
  }
}