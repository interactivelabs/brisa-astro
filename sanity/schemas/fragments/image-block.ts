import { defineArrayMember, defineField } from "sanity";

export default defineArrayMember({
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "caption",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "alt",
      type: "string",
    }),
    defineField({
      name: "source",
      type: "url",
    }),
    defineField({
      name: "loading",
      type: "string",
      options: {
        list: ["lazy", "eager"],
      },
      initialValue: "lazy",
    }),
  ],
  preview: {
    select: {
      title: "caption",
      subtitle: "alt",
      media: "asset",
    },
  },
});
