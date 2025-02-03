import { defineField, defineType } from "sanity";

export default defineType({
  name: "cta",
  title: "Call-to-action",
  type: "object",
  fields: [
    defineField({
      name: "link",
      type: "link",
    }),
    defineField({
      name: "style",
      type: "string",
      options: {
        list: [
          "solid.slate",
          "solid.blue",
          "solid.white",
          "outline.slate",
          "outline.white",
          "outline.blue",
        ],
      },
    }),
  ],
  preview: {
    select: {
      label: "link.label",
      pageTitle: "link.internal.title",
      internal: "link.internal.metadata.slug.current",
      external: "link.external",
    },
    prepare: ({ label, pageTitle, internal, external }) => ({
      title: label || pageTitle,
      subtitle:
        external || (internal && (internal === "index" ? "/" : `/${internal}`)),
    }),
  },
});
