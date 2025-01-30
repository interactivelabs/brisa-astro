import { defineField, defineType } from "sanity";
import { getBlockText } from "../../utils";
import {
  textAlign,
  alignItems,
  alignmentFieldset,
} from "../fragments/fields/alignment";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  groups: [
    { name: "content", default: true },
    { name: "image" },
    { name: "options" },
  ],
  fieldsets: [alignmentFieldset],
  fields: [
    defineField({
      name: "pretitle",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "largetext",
      title: "Hero Large Text",
      type: "array",
      of: [{ type: "heroLine" }],
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "string" }],
      group: "content",
    }),
    defineField({
      name: "ctas",
      title: "Call-to-actions",
      type: "array",
      of: [{ type: "cta" }],
      group: "content",
    }),
    defineField({
      name: "enableDefault",
      description: "Default content if other content is not provided",
      title: "Enable Default",
      type: "boolean",
    }),
    defineField({
      name: "bgImage",
      title: "Background image",
      description:
        "Image used as fallback when orb canvas is not supported (legacy browsers)",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
        }),
        defineField({
          name: "loading",
          type: "string",
          options: {
            layout: "radio",
            list: ["lazy", "eager"],
          },
          initialValue: "lazy",
        }),
      ],
      group: "image",
    }),
    defineField({
      name: "bgImageMobile",
      title: "Background image (mobile)",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "image",
    }),
    defineField({
      ...textAlign,
      fieldset: "alignment",
    }),
    defineField({
      ...alignItems,
      fieldset: "alignment",
    }),
  ],
  preview: {
    select: {
      content: "content",
      media: "bgImage",
    },
    prepare: ({ content, media }) => ({
      title: getBlockText(content),
      subtitle: "Hero",
      media,
    }),
  },
});
