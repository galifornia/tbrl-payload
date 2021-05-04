import { Block } from "payload/types";
import backgroundColor, {
  Type as BackgroundColorType,
} from "../../fields/background-color";
import { MediaType } from "../../collections/Media";
import { RichTextField } from "payload/dist/fields/config/types";

export type Image = {
  image: MediaType;
};

export type Type = {
  backgroundColor: BackgroundColorType;
  content?: RichTextField;
  images: Image[];
};

const ImageGrid: Block = {
  slug: "image-grid",
  labels: {
    singular: "Image Grid",
    plural: "Image Grids",
  },
  fields: [
    backgroundColor,
    {
      name: "content",
      label: "Content",
      type: "richText",
    },
    {
      name: "images",
      label: "Images",
      type: "array",
      minRows: 3,
      maxRows: 12,
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "media",
          required: true,
        },
        {
          name: "content",
          label: "Content",
          type: "textarea",
        },
      ],
    },
  ],
};

export default ImageGrid;
