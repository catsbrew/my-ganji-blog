# MDX 블로그

이 프로젝트는 Next.js App Router와 MDX를 활용한 정적 블로그 포트폴리오입니다. 서버 컴포넌트와 정적 사이트 생성(SSG)을 사용해 빠른 로딩 속도와 SEO 최적화를 달성했으며, MDX로 동적 React 컴포넌트를 포함한 콘텐츠를 제공합니다. 포트폴리오로 최신 프론트엔드 기술 스택을 보여주기 위해 설계되었습니다.

## 주요 기능

정적 사이트 생성(SSG): 빌드 시 모든 블로그 포스트를 정적 HTML로 생성해 성능 최적화.
MDX 콘텐츠: Markdown과 JSX를 결합해 인터랙티브한 블로그 포스트 제공.
SEO 최적화: 서버 컴포넌트를 사용해 검색 엔진 크롤링에 최적화.
깔끔한 UI: Tailwind CSS로 반응형 디자인 구현.

## 기술 스택

Next.js: App Router와 서버 컴포넌트를 활용한 프론트엔드 프레임워크.
@next/mdx: MDX 파일을 정적 페이지로 렌더링.
Tailwind CSS: 빠르고 반응형 스타일링.
Vercel: 배포 및 호스팅 플랫폼.

## 설치 및 실행

1. 레포지토리 클론:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. 의존성 설치:

```bash
npm install
```

3. 개발 서버 실행:

```bash
npm run dev
```

- 브라우저에서 http://localhost:3000 접속.

4. 빌드 및 정적 export:

```bash
npm run build
npm run export
```

out/ 폴더에 정적 파일 생성.

콘텐츠 관리

- 블로그 포스트는 content/ 폴더의 .mdx 파일로 관리.
- 새 포스트 추가: content/에 .mdx 파일 추가 후 빌드.
- 예시 (content/post1.mdx):

```mdx
---
title: 첫 포스트
date: 2025-10-08
---

# {frontmatter.title}

MDX로 작성된 포스트입니다!

<CustomButton>클릭!</CustomButton>
```

## 배포

- Vercel에 배포 완료: <수정>
- 정적 사이트로 배포해 서버리스 호스팅, 유지비 제로.

## 포트폴리오 어필 포인트

- Next.js App Router: 최신 React 기반 아키텍처 사용.
- 서버 컴포넌트: 클라이언트 JavaScript 최소화로 성능 최적화.
- MDX: Markdown과 JSX 결합으로 동적 콘텐츠 구현.
- SEO 및 접근성: 검색 엔진 친화적, 반응형 UI로 사용자 경험 개선.

## 향후 계획

- 검색 기능 추가 (예: useSearchParams 활용).
- 다크 모드 구현.
- MDX에 더 많은 인터랙티브 컴포넌트 추가 (예: 차트, 퀴즈).

## 연락처

- 이메일: catzbrew@gmail.com
- GitHub: catsbrew
