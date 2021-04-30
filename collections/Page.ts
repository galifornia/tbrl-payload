import { CollectionConfig } from "payload/types";
import { MediaType } from "./Media";
import slug from "../fields/slug";
import meta from "../fields/meta";
import { Image, Type as ImageType } from "../blocks/Image";
import { CallToAction, Type as CallToActionType } from "../blocks/CallToAction";
import { Content, Type as ContentType } from "../blocks/Content";

export type Layout = CallToActionType | ContentType | ImageType;

export type Type = {
  title: string;
  slug: string;
  image?: MediaType;
  layout: Layout[];
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

export const Page: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: "title",
      label: "Page Title",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Page Layout",
      type: "blocks",
      minRows: 1,
      blocks: [CallToAction, Content, Image],
    },
    meta,
    slug,
  ],
};

export default Page;
