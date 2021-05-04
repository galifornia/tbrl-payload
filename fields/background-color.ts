import { Field } from "payload/types";

const backgroundColor: Field = {
  name: "backgroundColor",
  type: "radio",
  label: "Background Color",
  defaultValue: "none",
  admin: {
    layout: "horizontal",
  },
  options: [
    {
      label: "None",
      value: "none",
    },
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Orange",
      value: "orange",
    },
  ],
};

export type Type = "orange" | "red" | "none" | "blue";
export default backgroundColor;
