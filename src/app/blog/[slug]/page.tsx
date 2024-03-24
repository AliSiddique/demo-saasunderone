import Navbar from "@/components/landing-pages/light-saas/Navbar";
import { getPostBySlug } from "@/lib/mdx";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};
export default async function page({ params }: Props) {
  const { meta, content }: any = await getPageContent(params.slug);

  return (
    <div>
      <Navbar />
      <div className="text-align dark:prose-invert prose mx-auto max-w-3xl text-gray-800 dark:text-white px-6 py-32 text-base leading-7  lg:px-8">
        <h1 className="text-4xl font-bold">{meta.title}</h1>
        <p className="text-gray-500">{meta.description}</p>
        <div className="flex items-center mt-4">
          <Image
            src={meta.authorImage}
            className="rounded-full"
            alt={meta.author + " image"}
            width={40}
            height={40}
          />
          <p className="ml-2 text-gray-500">{meta.author}</p>
        </div>
        <img
          src={meta.featuredimage}
          className="h-52 w-full rounded-lg object-cover"
          alt={meta.title + " image"}
          width={500}
          height={500}
        />
        {content}
      </div>
    </div>
  );
}
