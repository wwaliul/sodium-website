import { defineField, defineType } from "sanity";

export const solution = defineType({
  name: "solution",
  title: "Solutions",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      type: "string",
      description: "Main headline for the solution page",
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      description: "Short description for cards and previews",
    }),
    defineField({
      name: "icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Sort order (lower numbers appear first)",
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              type: "string",
            }),
            defineField({
              name: "content",
              type: "blockContent",
            }),
            defineField({
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: "heading",
              media: "image",
            },
          },
        },
      ],
    }),
    defineField({
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
  groups: [
    {
      name: "seo",
      title: "SEO",
      default: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "icon",
    },
  },
});
