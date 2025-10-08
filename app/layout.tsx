import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import '@/app/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: {
    template: '%s | Blog',
    default: 'Blog',
  },
  description: 'Next로 만드는 MDX 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
