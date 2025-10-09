import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ['remark-frontmatter'],
    rehypePlugins: [
      [
        'rehype-pretty-code',
        { keepBackground: true, theme: 'catppuccin-mocha' },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
