import { Field } from "payload/types";

const link: Field = {
  name: "link",
  type: "group",
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      label: "Label",
    },
    {
      name: "type",
      label: "Type",
      type: "radio",
      options: [
        { label: "Custom url", value: "custom" },
        { label: "Page", value: "page" },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      name: "page",
      label: "Page to link to",
      type: "relationship",
      relationTo: "pages",
      required: true,
      admin: {
        condition: (_, sibling) => sibling?.type === "page",
      },
    },
    {
      name: "url",
      label: "Custom URL",
      type: "text",
      required: true,
      admin: {
        condition: (_, sibling) => sibling?.type === "custom",
      },
    },
  ],
};

export default link;
