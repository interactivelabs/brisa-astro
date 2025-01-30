import { defineArrayMember, defineField, defineType } from "sanity";
import { count, getBlockText } from "../../utils";

export default defineType({
  name: "flag-list",
  title: "Flag list",
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
              name: "icon",
              type: "image",
            }),
            defineField({
              name: "content",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: {
            select: {
              content: "content",
              media: "icon",
            },
            prepare: ({ content, media }) => ({
              title: getBlockText(content),
              media,
            }),
          },
        }),
      ],
      group: "content",
    }),
    defineField({
      name: "iconSize",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
      initialValue: 40,
      group: "options",
    }),
    defineField({
      name: "iconPosition",
      type: "string",
      options: {
        list: ["top", "left"],
        layout: "radio",
      },
      initialValue: "left",
      group: "options",
    }),
  ],
  preview: {
    select: {
      intro: "intro",
      items: "items",
    },
    prepare: ({ intro, items }) => ({
      title: getBlockText(intro) || count(items),
      subtitle: "Flag list",
    }),
  },
});
