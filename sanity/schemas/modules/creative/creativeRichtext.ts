import { defineArrayMember, defineField } from "sanity";
import { getBlockText } from "../../../utils";

export default defineArrayMember({
  name: "richtext",
  type: "object",
  fields: [
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: "Richtext",
    }),
  },
});
