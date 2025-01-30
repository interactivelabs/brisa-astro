import { defineField, defineType } from "sanity";

export default defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fieldsets: [{ name: "schedule", options: { columns: 2 } }],
  fields: [
    defineField({
      name: "content",
      type: "text",
    }),
    defineField({
      name: "cta",
      title: "Call-to-action",
      type: "link",
    }),
    defineField({
      name: "start",
      title: "Start",
      type: "datetime",
      fieldset: "schedule",
    }),
    defineField({
      name: "end",
      title: "End",
      type: "datetime",
      fieldset: "schedule",
    }),
  ],
  preview: {
    select: {
      content: "content",
      cta: "cta.label",
    },
  },
});
