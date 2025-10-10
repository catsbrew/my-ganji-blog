import Link from 'next/link';
import { getBlogPosts } from '../blog/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import toothless from '@/public/toothless.jpg';

export default function Posts() {
  const posts = getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="w-full h-full flex flex-col space-y-1"
          href={`/blog/${post.slug}`}
        >
          <Card className="bg-transparent/10 backdrop-blur-md hover:transition-all hover:duration-500 pb-2 px-2">
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-2xl">{post.metadata.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              {post.metadata.summary}
            </CardContent>
            <CardFooter className="relative w-full h-[250px] rounded-lg overflow-hidden border">
              <Image
                src={post.metadata.image || toothless}
                fill
                alt="@IMAGE"
                className="object-cover"
              />
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
