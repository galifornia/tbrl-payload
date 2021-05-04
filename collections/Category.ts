import { CollectionConfig } from "payload/types";
import slug, { Type as SlugType } from "../fields/slug";
import meta from "../fields/meta";
import { Type as MetaType } from "../fields/meta";

export type Type = {
  title: string;
  slug: SlugType;
  meta: MetaType;
};

const Category: CollectionConfig = {
  slug: "categories",
  fields: [
    { name: "title", label: "Title", type: "text", required: true },
    slug,
    meta,
  ],
};

export default Category;
