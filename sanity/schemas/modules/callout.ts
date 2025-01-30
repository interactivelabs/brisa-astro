import { defineField, defineType } from "sanity";
import { getBlockText } from "../../utils";

export default defineType({
  name: "callout",
  title: "Callout",
  type: "object",
  fields: [
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "ctas",
      title: "Call-to-actions",
      type: "array",
      of: [{ type: "cta" }],
    }),
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: "Callout",
    }),
  },
});
