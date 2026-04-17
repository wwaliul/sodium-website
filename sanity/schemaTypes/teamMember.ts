import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Members",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
    }),
    defineField({
      name: "photo",
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
      rows: 4,
    }),
    defineField({
      name: "linkedin",
      type: "url",
      description: "LinkedIn profile URL",
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Sort order (lower numbers appear first)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
});
