import { defineField, defineType } from "sanity";
import { count, getBlockText } from "../../utils";

export default defineType({
  name: "testimonial-list",
  title: "Testimonial list",
  type: "object",
  fields: [
    defineField({
      name: "intro",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
  ],
  preview: {
    select: {
      intro: "intro",
      testimonials: "testimonials",
    },
    prepare: ({ intro, testimonials }) => ({
      title: getBlockText(intro) || count(testimonials, "testimonial"),
      subtitle: "Testimonial list",
    }),
  },
});
