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
