import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      type: "string",
      description: "Override default page title for SEO",
    }),
    defineField({
      name: "metaDescription",
      type: "text",
      rows: 3,
      description: "Override default meta description",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      description: "Open Graph image for social sharing",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "noIndex",
      type: "boolean",
      description: "Prevent search engines from indexing this page",
      initialValue: false,
    }),
  ],
});
