import React from "react";
import { Block } from "payload/types";
import RichText from "../../components/RichText";
import classes from "./index.module.css";

export type Type = {
  blockType: "content";
  blockName?: string;
  content: unknown;
};

export const Content: Block = {
  slug: "content",
  labels: {
    singular: "Content",
    plural: "Content Blocks",
  },
  fields: [
    {
      name: "backgroundColor",
      label: "Background Color",
      type: "radio",
      defaultValue: "none",
      admin: {
        layout: "horizontal",
      },
      options: [
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
        {
          label: "None",
          value: "none",
        },
      ],
    },
    {
      name: "columns",
      type: "array",
      minRows: 1,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "width",
              label: "Column Width",
              type: "select",
              options: [
                {
                  label: "One third",
                  value: "oneThird",
                },
                {
                  label: "Half",
                  value: "half",
                },
                {
                  label: "Two third",
                  value: "twoThird",
                },
                {
                  label: "Full Width",
                  value: "full",
                },
              ],
              admin: {
                width: "50%",
              },
            },
            {
              name: "alignment",
              label: "Alignment",
              type: "select",
              options: [
                {
                  label: "Left",
                  value: "left",
                },
                {
                  label: "Center",
                  value: "center",
                },
                {
                  label: "Right",
                  value: "right",
                },
              ],
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "content",
          type: "richText",
          required: true,
        },
        {
          name: "accentLine",
          label: "Enable Line Alignment",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "accentLineAlignment",
          label: "Accent Line Alignment",
          type: "radio",
          defaultValue: "left",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
          admin: {
            condition: (_, siblingData) => siblingData.accentLine,
            layout: "horizontal",
          },
        },
        {
          type: "row",
          fields: [
            {
              name: "paddingTop",
              label: "Padding Top",
              type: "select",
              defaultValue: "medium",
              options: [
                { label: "Small", value: "small" },
                { label: "Medium", value: "medium" },
                { label: "Large", value: "large" },
              ],
            },
            {
              name: "paddingBottom",
              label: "Padding Bottom ",
              type: "select",
              defaultValue: "medium",
              options: [
                { label: "Small", value: "small" },
                { label: "Medium", value: "medium" },
                { label: "Large", value: "large" },
              ],
            },
          ],
          admin: {
            width: "50%",
          },
        },
      ],
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText content={content} className={classes.content} />
    </div>
  );
};

export default Content;
