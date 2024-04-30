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
      {/* 
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center justify-center">
            <img
            src={post.heroImage}
              alt="author"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <p>{post.createdAt}</p>
          <div className="prose">
          </div>
        </div>
      </div> */}
      <SingleBlog post={post}  />
    </div>
  );

}