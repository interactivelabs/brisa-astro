import { defineArrayMember, defineField, defineType } from "sanity";
import { getBlockText } from "../../utils";

export default defineType({
  name: "accordion-list",
  title: "Accordion list",
  type: "object",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "options", title: "Options" },
  ],
  fields: [
    defineField({
      name: "intro",
      type: "array",
      of: [{ type: "string" }],
      group: "content",
    }),
    defineField({
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "summary",
              type: "string",
            }),
            defineField({
              name: "content",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "open",
              type: "boolean",
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: "summary",
              content: "content",
            },
            prepare: ({ title, content }) => ({
              title,
              subtitle: getBlockText(content),
            }),
          },
        }),
      ],
      group: "content",
    }),
    defineField({
      name: "layout",
      type: "string",
      options: {
        layout: "radio",
        list: ["vertical", "horizontal"],
      },
      initialValue: "vertical",
      group: "options",
    }),
    defineField({
      name: "uid",
      title: "Unique Identifier",
      type: "uid",
      group: "options",
    }),
  ],
  preview: {
    select: {
      intro: "intro",
    },
    prepare: ({ intro }) => ({
      title: getBlockText(intro),
      subtitle: "Accordion list",
    }),
  },
});
