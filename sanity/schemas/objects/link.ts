import { defineField, defineType } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: "label",
      type: "string",
    }),
    defineField({
      name: "type",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "internal", value: "internal" },
          { title: "external", value: "external" },
        ],
      },
    }),
    defineField({
      name: "internal",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent }) => parent?.type !== "internal",
    }),
    defineField({
      name: "external",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
      hidden: ({ parent }) => parent?.type !== "external",
    }),
    defineField({
      name: "params",
      title: "URL params",
      type: "string",
      hidden: ({ parent }) => parent?.type !== "internal",
    }),
  ],
  preview: {
    select: {
      label: "label",
      _type: "internal._type",
      title: "internal.title",
      slug: "internal.metadata.slug.current",
      external: "external",
      params: "params",
    },
    prepare: ({ label, title, slug, external, params }) => ({
      title: label || title,
      subtitle: [
        external || (slug && (slug === "index" ? "/" : `/${slug}`)),
        params,
      ]
        .filter(Boolean)
        .join(""),
    }),
  },
});
