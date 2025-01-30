import { defineField, defineType } from "sanity";
import { getBlockText } from "../../utils";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "author",
      type: "object",
      fields: [
        defineField({
          name: "name",
          type: "string",
        }),
        defineField({
          name: "title",
          type: "string",
        }),
        defineField({
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      content: "content",
      author: "author",
    },
    prepare: ({ content, author }) => ({
      title: getBlockText(content),
      subtitle: author?.name || author?.title || "No author",
      media: author?.image,
    }),
  },
});
