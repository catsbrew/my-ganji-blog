import { notFound } from 'next/navigation';
import { getBlogPosts } from '../utils';
import { Separator } from '@/components/ui';
import Image from 'next/image';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const { default: Post } = await import(`@/app/blog/contents/${slug}.mdx`);

  const post = getBlogPosts().find((post) => post.slug === slug);
  console.log(post?.metadata);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="w-full aspect-[16/9] relative">
        <Image
          src={post.metadata.image || 'image/'}
          fill
          alt="zenitsu"
          className="-z-50 !m-0"
        />
        <div className="flex flex-col align-bottom">
          <h1 className="title font-semibold text-2xl tracking-tighter">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-8 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {new Date(post.metadata.publishedAt).toISOString().split('T')[0]}
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <article>
        <Post />
      </article>
    </>
  );
}

export function generateStaticParams() {
  return [{ slug: 'welcome' }];
}

export const dynamicParmas = false;
