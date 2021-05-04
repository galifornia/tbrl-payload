import { Block } from "payload/types";
import backgroundColor, {
  Type as BackgroundColorType,
} from "../../fields/background-color";
import { Type as StudyType } from "../../collections/Study";

export type Type = {
  backgroundColor: BackgroundColorType;
  studies: StudyType[];
};

const StudySlider: Block = {
  slug: "study-slider",
  labels: {
    singular: "Study Slider",
    plural: "Studies Sliders",
  },
  fields: [
    backgroundColor,
    {
      name: "studies",
      label: "Studies",
      type: "relationship",
      relationTo: "studies",
      hasMany: true,
      required: true,
    },
  ],
};

export default StudySlider;
