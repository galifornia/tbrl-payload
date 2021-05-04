import { GlobalConfig } from "payload/types";
import link from "../fields/link";

const SocialMedia: GlobalConfig = {
  slug: "social-media",

  fields: [
    {
      name: "socials",
      type: "array",
      fields: [link],
    },
  ],
};

export default SocialMedia;
