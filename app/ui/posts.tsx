import Link from 'next/link';
import { getBlogPosts } from '../blog/utils';
import Image from 'next/image';

export default function Posts() {
  const posts = getBlogPosts();
  console.log(posts);

  return (
    <div className="w-full h-full flex flex-col items-center">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="w-full h-full flex flex-col space-y-1"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-[80%] relative aspect-[16/9] object-cover  rounded-md overflow-hidden">
              <Image
                src={`${post.metadata.image}`}
                fill
                alt="zenitsu"
                // sizes="(max-width: 640px) 100vw, 800px" // 성능 개선을 위해 sizes 추가
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-lg">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {
                  new Date(post.metadata.publishedAt)
                    .toISOString()
                    .split('T')[0]
                }
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
