import { defineArrayMember, defineField } from "sanity";
import { count } from "../../../utils";

export default defineArrayMember({
  name: "ctas",
  title: "Call-to-actions",
  type: "object",
  fields: [
    defineField({
      name: "ctas",
      title: "Call-to-actions",
      type: "array",
      of: [{ type: "cta" }],
    }),
  ],
  preview: {
    select: {
      ctas: "ctas",
    },
    prepare: ({ ctas }) => ({
      title: count(ctas, "CTA"),
    }),
  },
});
