import { Field } from "payload/types";

export type Type = {
  type: "custom" | "page";
  row: {
    label: string;
    page?: string;
    url?: string;
  };
};

const link: Field = {
  name: "link",
  type: "group",
  fields: [
    {
      name: "type",
      label: "Type",
      type: "radio",
      defaultValue: "page",
      options: [
        { label: "Custom url", value: "custom" },
        { label: "Page", value: "page" },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "page",
          label: "Page to link to",
          type: "relationship",
          relationTo: "pages",
          required: true,
          admin: {
            condition: (_, sibling) => sibling?.type === "page",
            width: "50%",
          },
        },
        {
          name: "url",
          label: "Custom URL",
          type: "text",
          required: true,
          admin: {
            condition: (_, sibling) => sibling?.type === "custom",
            width: "50%",
          },
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Label",
          admin: {
            width: "50%",
          },
        },
      ],
    },
  ],
};

export default link;
