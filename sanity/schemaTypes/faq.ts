import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Pricing", value: "pricing" },
          { title: "Technical", value: "technical" },
          { title: "Features", value: "features" },
          { title: "Security", value: "security" },
        ],
      },
    }),
    defineField({
      name: "order",
      type: "number",
      description: "Sort order (lower numbers appear first)",
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "category",
    },
  },
});
