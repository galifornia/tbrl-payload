import { Block } from "payload/types";
import stat, { StatType } from "../../fields/stat";

type Sizes = "none" | "small" | "medium" | "large";

export type Type = {
  topOverlap: Sizes;
  bottomOverlap: Sizes;
  stats: StatType;
};

const Statistics: Block = {
  slug: "statistics",
  labels: {
    singular: "Statistics",
    plural: "Statistic Blocks",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "topOverlap",
          label: "Top Overlap",
          type: "select",
          defaultValue: "none",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" },
          ],
          admin: {
            width: "50%",
          },
        },
        {
          name: "bottomOverlap",
          label: "Bottom Overlap",
          type: "select",
          defaultValue: "none",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" },
          ],
          admin: {
            width: "50%",
          },
        },
        {
          ...stat,
        },
      ],
    },
  ],
};

export default Statistics;
