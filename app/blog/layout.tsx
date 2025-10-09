import clsx from 'clsx';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        // 기본 레이아웃 및 크기 설정
        'prose max-w-4xl mx-auto p-6 lg:prose-lg',

        // 일반적인 텍스트 색상
        'text-gray-900 dark:text-gray-100',

        // 제목 (Headings) 스타일
        // **[조정됨]** 기본 mt-8 대신 mt-4 (위쪽 마진) 및 mb-2 (아래쪽 마진)로 줄였습니다.
        'prose-headings:mt-10 prose-headings:mb-2 prose-headings:font-bold prose-headings:tracking-tight',
        'prose-headings:text-gray-900 dark:prose-headings:text-white',

        // 줄 (hr) 스타일
        'prose-hr:my-10',

        // 🌟 볼드체 (Strong Tag) 스타일 추가
        'prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-white',

        // 문단 (Paragraphs) 스타일
        // **[조정됨]** 문단 상하 마진을 'my-2'로 설정하여 간격을 줄였습니다.
        'prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-2',

        // 링크 (Links) 스타일
        'prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-300 prose-a:font-medium',

        // 코드 블록 및 인라인 코드 (Code & Inline Code) 스타일
        'prose-code:bg-gray-200 dark:prose-code:bg-gray-700 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-code:rounded-md prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono',

        // 인용구 (Blockquotes) 스타일
        // **[조정됨]** 인용구 상하 마진을 'my-4'로 설정하여 기본값보다 줄였습니다.
        'prose-blockquote:my-4 prose-blockquote:border-l-4 prose-blockquote:border-gray-400 dark:prose-blockquote:border-gray-400',
        'prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300 prose-blockquote:italic',

        // 목록 (Lists) 스타일
        // **[조정됨]** 목록 상하 마진을 'my-2'로 설정하여 간격을 줄였습니다.
        'prose-ul:list-disc prose-ol:list-decimal prose-ul:my-2 prose-ol:my-2',
        'prose-li:marker:text-gray-500 dark:prose-li:marker:text-gray-300',

        // 제목별 크기 (크기 클래스는 기존과 동일하게 유지했습니다.)
        'prose-h1:text-4xl sm:prose-h1:text-4xl',
        'prose-h2:text-3xl sm:prose-h2:text-3xl prose-h2:border-b dark:prose-h2:border-gray-600 prose-h2:pb-2',
        'prose-h3:text-2xl sm:prose-h3:text-2xl',
        'prose-h4:text-xl sm:prose-h4:text-xl',
        'prose-h5:text-lg sm:prose-h5:text-lg',
        'prose-h6:text-base sm:prose-h6:text-base',

        'prose-pre:!bg-transparent prose-pre:!p-0 ! prose-pre:shadow-none prose-code:!bg-black prose-code:!text-white',
      )}
    >
      {children}
    </div>
  );
}
