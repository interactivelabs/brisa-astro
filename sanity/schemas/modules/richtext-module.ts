import { defineArrayMember, defineField, defineType } from "sanity";
import imageBlock from "../fragments/image-block";
import { getBlockText } from "../../utils";

export default defineType({
  name: "richtext-module",
  title: "Richtext module",
  type: "object",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "options", title: "Options" },
  ],
  fields: [
    defineField({
      name: "content",
      type: "array",
      of: [
        { type: "string" },
        imageBlock,
        defineArrayMember({
          type: "code",
          options: {
            withFilename: true,
          },
        }),
      ],
      group: "content",
    }),
    defineField({
      name: "tableOfContents",
      type: "boolean",
      initialValue: false,
      group: "options",
    }),
    defineField({
      name: "tocPosition",
      type: "string",
      options: {
        list: ["left", "right"],
        layout: "radio",
      },
      hidden: ({ parent }) => !parent.tableOfContents,
      initialValue: "right",
      group: "options",
    }),
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: "Richtext module",
    }),
  },
});
