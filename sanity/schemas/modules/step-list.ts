import { defineArrayMember, defineField, defineType } from "sanity";
import { getBlockText } from "../../utils";

export default defineType({
  name: "step-list",
  title: "Step list",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "content",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: {
              content: "content",
            },
            prepare: ({ content }) => ({
              title: getBlockText(content),
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      intro: "intro",
    },
    prepare: ({ intro }) => ({
      title: getBlockText(intro),
      subtitle: "Step list",
    }),
  },
});
