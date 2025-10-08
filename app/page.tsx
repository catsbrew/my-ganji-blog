import { Skeleton } from '@/components/ui/skeleton';
import AppSidebar from './ui/app-sidebar';
import AppPostSkeleton from '@/components/ui/app-post-skeleton';

export default function Home() {
  return (
    <div className="w-full max-w-[1328px] pt-12 flex-1">
      <main className="container w-full h-full min-h-[720px] flex p-6 gap-6">
        {/* 사이드바 */}
        <AppSidebar />
        <section className="flex-1 flex flex-col gap-12">
          {/* 포스트 리스트 */}
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Posts
                </h4>
              </div>
              <p className="md:text-base text-muted-foreground">
                내가 만든 쿸히~~ 이
              </p>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <AppPostSkeleton />
              <AppPostSkeleton />
              <AppPostSkeleton />
              <AppPostSkeleton />

              <AppPostSkeleton />
              <AppPostSkeleton />
              <AppPostSkeleton />
              <AppPostSkeleton />

              <AppPostSkeleton />
              <AppPostSkeleton />
              <AppPostSkeleton />
              <AppPostSkeleton />

              <AppPostSkeleton />
              <AppPostSkeleton />
              <AppPostSkeleton />
              <AppPostSkeleton />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
