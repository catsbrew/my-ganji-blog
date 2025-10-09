import { notFound } from 'next/navigation';
import { getBlogPosts } from '../utils';
import { Separator } from '@/components/ui';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const { default: Post } = await import(`@/app/blog/contents/${slug}.mdx`);

  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="w-full">
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
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: 'welcome' }];
}

export const dynamicParmas = false;
