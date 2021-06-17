import { GlobalConfig } from "payload/types";
import link, { Type as LinkType } from "../fields/link";

export type Type = {
  nav: {
    link: LinkType;
  }[];
};

const SocialMedia: GlobalConfig = {
  slug: "social-media",

  fields: [
    {
      name: "socials",
      labels: {
        singular: "Link",
        plural: "Links",
      },
      type: "array",
      fields: [link],
    },
  ],
};

export default SocialMedia;
