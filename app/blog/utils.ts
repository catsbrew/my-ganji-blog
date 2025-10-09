import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  // gray-matter는 파싱된 모든 데이터를 반환하므로 유연성을 위해 추가
  [key: string]: any;
};

export type Post = {
  metadata: Metadata;
  slug: string;
  content: string; // Frontmatter를 제외한 MDX 본문 내용
};

/**
 * MDX 파일의 frontmatter를 gray-matter 라이브러리를 사용하여 파싱합니다.
 * @param fileContent MDX 파일 전체 내용 (문자열)
 * @returns { metadata: Metadata, content: string }
 */
function parseFrontmatter(fileContent: string): {
  metadata: Metadata;
  content: string;
} {
  // gray-matter를 사용하여 frontmatter와 내용을 분리합니다.
  const { data, content } = matter(fileContent);

  // data 객체를 Metadata 타입으로 캐스팅하여 반환합니다.
  return { metadata: data as Metadata, content };
}

/**
 * 지정된 디렉토리에서 .mdx 파일 목록을 가져옵니다.
 */
function getMDXFiles(dir: string): string[] {
  try {
    // 디렉토리가 존재하는지 확인하는 로직을 추가하여 안정성을 높입니다.
    if (!fs.existsSync(dir)) {
      console.warn(`Directory not found: ${dir}`);
      return [];
    }
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
  } catch (error) {
    console.error(`Error reading MDX directory ${dir}:`, error);
    return [];
  }
}

/**
 * 단일 MDX 파일을 읽고 frontmatter를 파싱합니다.
 */
function readMDXFile(filePath: string): {
  metadata: Metadata;
  content: string;
} {
  try {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    return parseFrontmatter(rawContent);
  } catch (error) {
    console.error(`Error reading or parsing file ${filePath}:`, error);
    // 오류 발생 시 빈 객체 반환
    return { metadata: {} as Metadata, content: '' };
  }
}

/**
 * 지정된 디렉토리의 모든 MDX 파일에서 데이터를 추출합니다.
 */
function getMDXData(dir: string): Post[] {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles
    .map((file) => {
      const filePath = path.join(dir, file);
      const { metadata, content } = readMDXFile(filePath);

      // 메타데이터가 존재하고 제목(title)이 필수적으로 있어야 유효한 포스트로 간주
      if (!metadata || !metadata.title || content.trim() === '') {
        console.warn(`Skipping invalid post file: ${file}`);
        return null;
      }

      const slug = path.basename(file, path.extname(file));

      return {
        metadata,
        slug,
        content,
      };
    })
    .filter((post): post is Post => post !== null);
}

/**
 * 프로젝트 루트 경로 기준으로 블로그 포스트 데이터를 가져옵니다.
 */
export function getBlogPosts(): Post[] {
  const contentPath = path.join(process.cwd(), 'app', 'blog', 'contents');
  return getMDXData(contentPath);
}

// --- 날짜 포맷팅 함수 (변경 없음, 이전 개선된 버전 유지) ---

export function formatDate(
  date: string,
  includeRelative: boolean = false,
): string {
  // YYYY-MM-DD 형식만 들어왔을 경우 UTC 기준으로 인식하여 시간대 문제 방지
  const targetDate = new Date(date.includes('T') ? date : `${date}T00:00:00Z`);

  const fullDate = targetDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  const now = Date.now();
  const diff = now - targetDate.getTime();

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44);
  const years = Math.floor(days / 365.25);

  let relativeTime = '';

  if (diff < 0) {
    relativeTime = 'In the future';
  } else if (minutes < 60) {
    relativeTime = minutes < 5 ? 'Today' : `${minutes}m ago`;
  } else if (hours < 24) {
    relativeTime = `${hours}h ago`;
  } else if (days < 30) {
    relativeTime = `${days}d ago`;
  } else if (months < 12) {
    relativeTime = `${months}mo ago`;
  } else {
    relativeTime = `${years}y ago`;
  }

  return `${fullDate} (${relativeTime})`;
}
