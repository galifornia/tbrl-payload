import { GlobalConfig } from "payload/types";
import link, { Type as LinkType } from "../fields/link";

export type Type = {
  nav: {
    link: LinkType;
  }[];
};

const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "nav",
      labels: {
        singular: "Link",
        plural: "Links",
      },
      type: "array",
      fields: [link],
    },
  ],
};

export default Footer;
