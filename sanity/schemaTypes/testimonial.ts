import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "metricHighlight",
      type: "string",
      description: "Key metric to highlight (e.g., '7 hours saved/week')",
    }),
    defineField({
      name: "authorName",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authorTitle",
      type: "string",
      description: "Job title (e.g., 'Head of Learning')",
    }),
    defineField({
      name: "authorCompany",
      type: "string",
    }),
    defineField({
      name: "authorAvatar",
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
      name: "useCase",
      type: "string",
      options: {
        list: [
          { title: "Employee Onboarding", value: "onboarding" },
          { title: "Compliance Training", value: "compliance" },
          { title: "Product Training", value: "product" },
          { title: "Leadership Development", value: "leadership" },
          { title: "Skills Development", value: "skills" },
        ],
      },
    }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Show in featured sections",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "quote",
      subtitle: "authorName",
      media: "authorAvatar",
    },
    prepare(selection) {
      const { subtitle } = selection;
      return {
        ...selection,
        subtitle: subtitle && `${subtitle}`,
      };
    },
  },
});
