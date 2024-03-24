import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "./", "content");
const components = {
  // Define components here
};
export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: components, // <--- remove the curly braces
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPosts = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta, content } = await getPostBySlug(file);
    posts.push({ meta, content });
  }

  return posts;
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};
