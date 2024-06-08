import React from 'react'
import { Author, Post, allAuthors, allPosts } from "contentlayer/generated";
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
type Props = {}

export const revalidate = 10;

export default function page({}: Props) {
  const posts = allPosts
  .map((p) => ({
    ...p,
    author: allAuthors.find((a) => a.slug === p.author),
  }))
  console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <div>

          <Card className="bg-white dark:bg-black border-gray-300 px-0 mt-5">
            <CardHeader>{post.author?.name}</CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <p className="text-sm text-muted-foreground">
                  {post.brief}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-end">
                <Link href={`/blog/${post.slug}`}>
                  Read
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}

    </div>
  )
}