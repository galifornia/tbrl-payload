import { GlobalConfig } from "payload/types";
import link from "../fields/link";

const MegaMenu: GlobalConfig = {
  slug: "mega-menu",
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

export default MegaMenu;
