import { getAllPosts } from "@/lib/mdx";
import { config } from "../../config";

export default async function sitemap() {
  let sitename = config.siteUrl;
  const posts = await getAllPosts();

  const postPaths =
    posts.map((post: any) => {
      return {
        url: `${sitename}/blog/${post.meta.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: `${sitename}`,
      lastModified: new Date(),
    },
    {
      url: `${sitename}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${sitename}/login`,
      lastModified: new Date(),
    },
    ...postPaths,
  ];
}
