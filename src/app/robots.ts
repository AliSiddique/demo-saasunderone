import { MetadataRoute } from "next";
import { config } from "../../config";

export default function robots(): MetadataRoute.Robots {
  let sitename = config.siteUrl;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${sitename}/sitemap.xml`,
  };
}
