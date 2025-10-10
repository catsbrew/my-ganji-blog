import Link from 'next/link';
import { ModeToggle } from '@/components/theme-toggle';

export default function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 w-full flex items-center bg-transparent/10 backdrop-blur-md border-b">
      <div className="w-full flex items-center justify-between px-20 py-3">
        {/* 로고 & 네이게이션 메뉴 UI */}
        <div className="flex items-center gap-5">
          <Link href="/">
            <span className="text-emerald-400/80 hover:text-green-400/80 dark:text-purple-200/20 dark:hover:text-purple-200/80 transition-all duration-500 hover:transition-all hover:duration-500 text-xl font-semibold">
              CATSBREW
            </span>
          </Link>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
