import Posts from '../ui/posts';

export default function Home() {
  return (
    <div className="w-full pt-20 flex-1">
      <main className="w-full h-full min-h-[720px] flex px-20 gap-6">
        {/* 사이드바 */}
        {/* <AppSidebar /> */}
        <section className="flex-1 flex flex-col gap-12">
          {/* 포스트 리스트 */}
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Posts
                </h4>
              </div>
            </div>
            <div>
              <Posts />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
