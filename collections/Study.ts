import { CollectionConfig } from "payload/types";
import { MediaType } from "../collections/Media";
import { Type as CategoryType } from "../collections/Category";
import { Type as MetaType } from "../fields/meta";
import slug, { Type as SlugType } from "../fields/slug";
import meta from "../fields/meta";

export type Image = {
  image: MediaType;
};

export type Type = {
  title: string;
  client: string;
  featuredImage: Image;
  slug: SlugType;
  meta: MetaType;
  categories: CategoryType;
};

const Study: CollectionConfig = {
  slug: "studies",
  fields: [
    { name: "title", label: "Title", type: "text", required: true },
    {
      name: "client",
      label: "Client",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "location",
      label: "Location",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    slug,
    meta,
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Study;
