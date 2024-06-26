import {
    defineComputedFields,
    defineDocumentType,
    makeSource,
  } from "contentlayer/source-files";
  import type * as unified from "unified";
  import { toMarkdown } from "mdast-util-to-markdown";
  import { mdxToMarkdown } from "mdast-util-mdx";
  import { bundleMDX } from "mdx-bundler";
  import remarkGfm from "remark-gfm";
  import * as fs from "node:fs/promises";
  import type { DocumentGen } from "contentlayer/core";
  import path from "node:path";
  import rehypePrettyCode from "rehype-pretty-code";
  import rehypeSlug from "rehype-slug";
  import rehypeAutolinkHeadings from "rehype-autolink-headings";

  // /** @type {import('contentlayer/source-files').ComputedFields} */
  const computedSlugFields = defineComputedFields<
    "Page" | "Doc" | "Guide" | "Post" | "Author" | "Log"
  >({
    slug: {
      type: "string",
      resolve: (doc) => {
        const parts = doc._raw.flattenedPath.split("/");
        return parts[parts.length - 1];
      },
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  });
  
  export const CodePage = defineDocumentType(() => ({
    name: "CodePage",
    contentType: "mdx",
    filePathPattern: `code-pages/*.mdx`,
    fields: {
      fileName: { type: "string", required: true },
    },
  }));
  

  
  export const Post = defineDocumentType(() => ({
    name: "Post",
    contentType: "mdx",
    filePathPattern: `blog/*.mdx`,
    fields: {
      title: { type: "string", required: true },
      author: { type: "string", required: true },
      brief: { type: "string", required: true },
      heroImage: { type: "string", required: true },
      readTimeInMinutes: { type: "number", required: true },
      createdAt: { type: "date", required: true },
      updatedAt: { type: "date", required: false },
    },
    computedFields: {
      ...computedSlugFields,
    },
  }));
  
  export const Author = defineDocumentType(() => ({
    name: "Author",
    contentType: "mdx",
    filePathPattern: `authors/*.mdx`,
    fields: {
      name: { type: "string", required: true },
      image: { type: "string", required: true },
    },
    computedFields: {
      ...computedSlugFields,
    },
  }));
  
  const extractOrderFromWord = (
    word: string
  ): { name: string; order: number } => {
    const re = /^((\d+)-)?(.*)$/;
    const [, , orderStr, name] = word.match(re) ?? [];
    const order = orderStr ? parseInt(orderStr) : 0;
  
    return { order, name: name ?? "" };
  };
  
  export const computeUrlFromFilePath = (doc: DocumentGen): string => {
    return doc._raw.flattenedPath
      .replace(/pages\/?/, "")
      .split("/")
      .map(extractOrderFromWord)
      .map((x:any) => x.name)
      .join("/");
  };
  
  export const getLastEditedDate =
    (contentDirPath: string) =>
    async (doc: DocumentGen): Promise<Date> => {
      const stats = await fs.stat(
        path.join(contentDirPath, doc._raw.sourceFilePath)
      );
      return stats.mtime;
    };
  
  export type DocHeading = { level: 1 | 2 | 3; title: string };
  

  
  const tocPlugin =
    (headings: DocHeading[]): unified.Plugin =>
    () => {
      return (node: any) => {
        for (const element of node.children.filter(
          (child: any) => child.type === "heading"
        )) {
          const title = toMarkdown(
            { type: "paragraph", children: element.children },
            { extensions: [mdxToMarkdown()] }
          )
            .trim()
            .replace(/<.*$/g, "")
            .replace(/\\/g, "")
            .trim();
  
          headings.push({
            level: element.depth,
            title,
          });
        }
      };
    };
  
  export default makeSource({
    contentDirPath: "content",
    documentTypes: [Post, Author, CodePage],
    mdx: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode as any, { theme: "github-dark", keepBackground: true }],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],
      ],
    },
  });