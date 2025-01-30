import { defineField, defineType } from "sanity";
import { getBlockText } from "../../utils";

export default defineType({
  name: "testimonial.featured",
  title: "Testimonial (featured)",
  type: "object",
  fields: [
    defineField({
      name: "testimonial",
      type: "reference",
      to: [{ type: "testimonial" }],
    }),
  ],
  preview: {
    select: {
      testimonial: "testimonial.content",
    },
    prepare: ({ testimonial }) => {
      return {
        title: getBlockText(testimonial),
        subtitle: "Testimonial (featured)",
      };
    },
  },
});
