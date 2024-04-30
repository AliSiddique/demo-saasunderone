import { getPostBySlug } from "@/lib/mdx";
import Image from "next/image";
import React from "react";
import { allAuthors, allPosts } from "contentlayer/generated";
import Navbar from "@/components/landing-page/Navbar/navbar";
import SingleBlog from "@/components/ui/SingleBlog";

type Props = {
  params: {
    slug: string;
  };
};
export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`Post with slug ${slug} not found`);
  }


console.log(post)

  return (
    <div>
      <SingleBlog post={post}  />
    </div>
  );

}