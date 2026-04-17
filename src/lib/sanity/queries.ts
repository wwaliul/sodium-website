export const POSTS_QUERY = `
  *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    category,
    publishedAt,
    "author": author->{
      name,
      "slug": slug.current,
      image,
      role
    }
  }
`;

export const POST_SLUGS_QUERY = `
  *[_type == "post" && defined(publishedAt) && defined(slug.current)][].slug.current
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    category,
    publishedAt,
    body,
    seo,
    "author": author->{
      name,
      "slug": slug.current,
      image,
      bio,
      role
    },
    "relatedPosts": relatedPosts[]->{
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      publishedAt,
      category
    }
  }
`;

export const SOLUTIONS_QUERY = `
  *[_type == "solution"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    headline,
    description,
    icon,
    order
  }
`;

export const SOLUTION_SLUGS_QUERY = `
  *[_type == "solution" && defined(slug.current)][].slug.current
`;

export const SOLUTION_BY_SLUG_QUERY = `
  *[_type == "solution" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    headline,
    description,
    sections,
    seo,
    order
  }
`;

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    quote,
    metricHighlight,
    authorName,
    authorTitle,
    authorCompany,
    authorAvatar,
    useCase,
    featured
  }
`;

export const FAQ_QUERY = `
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category,
    order
  }
`;

export const TEAM_QUERY = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    photo,
    bio,
    linkedin,
    order
  }
`;