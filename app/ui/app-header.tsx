import { ModeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

export default function AppHeader() {
  return (
    <header className="fixed max-w-4xl top-4 z-10 w-full flex items-center bg-black/35 backdrop-blur-md dark:bg-white/10 dark:backdrop-blur-md rounded-lg border border-white/20 left-1/2 -translate-x-1/2">
      <div className="w-full max-w-4xl flex items-center justify-center py-3">
        {/* 로고 & 네이게이션 메뉴 UI */}
        <div className="flex items-center gap-5">
          <Link href="/">
            <span className="text-purple-500/20 hover:text-purple-500/50 dark:text-purple-200/20 dark:hover:text-purple-200/80 transition-all duration-500 hover:transition-all hover:duration-500 text-xl font-semibold">
              CATSBREW
            </span>
          </Link>
        </div>
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <ModeToggle />
      </div>
    </header>
  );
}
