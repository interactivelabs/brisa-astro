import { defineField, defineType } from "sanity";
import { count } from "../../utils";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "link" }, { type: "link.list" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      items: "items",
    },
    prepare: ({ title, items }) => ({
      title,
      subtitle: count(items),
    }),
  },
});
