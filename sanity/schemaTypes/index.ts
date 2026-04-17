import { type SchemaTypeDefinition } from "sanity";

import { post } from "./post";
import { author } from "./author";
import { category } from "./category";
import { solution } from "./solution";
import { testimonial } from "./testimonial";
import { faq } from "./faq";
import { teamMember } from "./teamMember";
import { siteSettings } from "./siteSettings";
import { blockContent } from "./blockContent";
import { seo } from "./seo";

export const schemaTypes: SchemaTypeDefinition[] = [
  post,
  author,
  category,
  solution,
  testimonial,
  faq,
  teamMember,
  siteSettings,
  blockContent,
  seo,
];
