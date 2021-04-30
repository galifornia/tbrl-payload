import { CollectionConfig } from "payload/types";
import slug from "../fields/slug";
import meta from "../fields/meta";

const Category: CollectionConfig = {
  slug: "categories",
  fields: [
    { name: "title", label: "Title", type: "text", required: true },
    slug,
    meta,
  ],
};

export default Category;
