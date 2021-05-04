import { Field } from "payload/types";

export type StatType = {
  statistic: string;
  description: string;
};

const stat: Field = {
  name: "stat",
  type: "group",
  fields: [
    {
      name: "statistic",
      label: "Statistic",
      type: "richText",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
      required: true,
    },
  ],
};

export default stat;
