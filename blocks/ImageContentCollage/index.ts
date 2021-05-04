import { Block } from "payload/types";
import backgroundColor, {
  Type as BackgroundColorType,
} from "../../fields/background-color";
import link, { Type as LinkType } from "../../fields/link";
import { MediaType } from "../../collections/Media";

export type Image = {
  image: MediaType;
};

export type Type = {
  backgroundColor: BackgroundColorType;
  content: unknown;
  enableCTA: boolean;
  link: LinkType;
  images: Image[];
};

const ImageContentCollage: Block = {
  slug: "image-content-collage",
  labels: {
    singular: "Image Content Collage",
    plural: "Image Content Collages",
  },
  fields: [
    backgroundColor,
    {
      name: "content",
      type: "richText",
      label: "Content",
      required: true,
    },
    {
      name: "enableCTA",
      label: "Enable Call to Action",
      type: "checkbox",
    },
    {
      ...link,
      admin: {
        condition: (_, siblingData: Type) => siblingData.enableCTA,
      },
    },
  ],
};

export default ImageContentCollage;
