import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import Page from "./collections/Page";
import Media from "./collections/Media";
import FormSubmission from "./collections/FormSubmissions";
import Study from "./collections/Study";
import Category from "./collections/Category";
import MegaMenu from "./globals/MegaMenu";
import SocialMedia from "./globals/SocialMedia";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Page, Media, FormSubmission, Study, Category],
  globals: [MegaMenu, SocialMedia],
});
