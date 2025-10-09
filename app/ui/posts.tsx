import Link from 'next/link';
import { getBlogPosts } from '../blog/utils';
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Posts() {
  const posts = getBlogPosts();

  return (
    // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
    <div className="flex flex-col space-y-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="w-full h-full flex flex-col space-y-1"
          href={`/blog/${post.slug}`}
        >
          <Card className="hover:bg-accent/25 hover:transition-all hover:duration-500">
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-2xl">{post.metadata.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              {post.metadata.summary}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
