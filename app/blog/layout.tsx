import clsx from 'clsx';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        // 기본 레이아웃 및 크기 설정
        'prose max-w-2xl mx-auto p-6 lg:prose-lg',

        // 일반적인 텍스트 색상
        'text-gray-900 dark:text-gray-100',

        // 제목 (Headings) 스타일
        'prose-headings:mt-8 prose-headings:font-bold prose-headings:tracking-tight',
        'prose-headings:text-gray-900 dark:prose-headings:text-white',

        // 🌟 볼드체 (Strong Tag) 스타일 추가
        // 라이트 모드에서는 일반 텍스트보다 진하게, 다크 모드에서는 순수 흰색으로 설정하여 강조
        'prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-white',

        // 문단 (Paragraphs) 스타일
        'prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed',

        // 링크 (Links) 스타일
        'prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-300 prose-a:font-medium',

        // 코드 블록 및 인라인 코드 (Code & Inline Code) 스타일
        'prose-code:bg-gray-200 dark:prose-code:bg-gray-700 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-code:rounded-md prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono',

        // 인용구 (Blockquotes) 스타일
        'prose-blockquote:border-l-4 prose-blockquote:border-gray-400 dark:prose-blockquote:border-gray-400',
        'prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300 prose-blockquote:italic',

        // 목록 (Lists) 스타일
        'prose-ul:list-disc prose-ol:list-decimal',
        'prose-li:marker:text-gray-500 dark:prose-li:marker:text-gray-300',

        // 제목별 크기
        'prose-h1:text-4xl sm:prose-h1:text-5xl',
        'prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:border-b dark:prose-h2:border-gray-600 prose-h2:pb-2',
        'prose-h3:text-2xl sm:prose-h3:text-3xl',
        'prose-h4:text-xl sm:prose-h4:text-2xl',
        'prose-h5:text-lg sm:prose-h5:text-xl',
        'prose-h6:text-base sm:prose-h6:text-lg',
      )}
    >
      {children}
    </div>
  );
}
