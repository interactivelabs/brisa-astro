import { defineArrayMember, defineField } from "sanity";

export default defineArrayMember({
  name: "icon",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      type: "image",
    }),
    defineField({
      name: "size",
      type: "number",
      description: "px",
      validation: (Rule) => Rule.min(1).integer(),
      initialValue: 60,
    }),
  ],
  preview: {
    select: {
      media: "icon",
    },
  },
});
