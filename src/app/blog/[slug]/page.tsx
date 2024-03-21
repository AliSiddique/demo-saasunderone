import { getPostBySlug } from '@/lib/mdx';
import Image from 'next/image';
import React from 'react'

type Props = {
    params: {
        slug: string
    }
}
const getPageContent = async (slug: string) => {
    const { meta, content } = await getPostBySlug(slug);
    return { meta, content };
  };
export default async function page({params}: Props) {
    const { meta, content }: any = await getPageContent(params.slug);

  return (
    <div className='text-align  prose mx-auto max-w-3xl bg-white px-6 py-32 text-base leading-7 text-gray-700 lg:px-8'>
    <img
      src={meta.featuredimage}
      className='h-52 w-full rounded-lg object-cover'
      alt={meta.title + ' image'}
      width={500}
      height={500}
    />
    {content}
  </div>
  )
}