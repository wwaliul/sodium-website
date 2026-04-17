import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "role",
      type: "string",
      options: {
        list: [
          { title: "Admin", value: "admin" },
          { title: "Editor", value: "editor" },
          { title: "Guest", value: "guest" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
