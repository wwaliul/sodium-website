import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO",
      default: true,
    },
    {
      name: "social",
      title: "Social Media",
    },
  ],
  fields: [
    defineField({
      name: "siteTitle",
      type: "string",
      description: "Default site title",
      group: "seo",
    }),
    defineField({
      name: "siteDescription",
      type: "text",
      rows: 3,
      description: "Default meta description",
      group: "seo",
    }),
    defineField({
      name: "ogImage",
      type: "image",
      description: "Default Open Graph image",
      group: "seo",
    }),
    defineField({
      name: "twitterHandle",
      type: "string",
      description: "Twitter handle (without @)",
      group: "social",
    }),
    defineField({
      name: "linkedinUrl",
      type: "url",
      group: "social",
    }),
  ],
  preview: {
    select: {
      title: "siteTitle",
      subtitle: "siteDescription",
    },
  },
});
