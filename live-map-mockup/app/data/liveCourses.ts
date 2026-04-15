import { colleges as fallbackColleges, courses as fallbackCourses, coursesSource, type College, type Course } from './coursesData';

const SCC_URL = coursesSource.programsPage;

const FETCH_CANDIDATES = [
  SCC_URL,
  `https://api.allorigins.win/raw?url=${encodeURIComponent(SCC_URL)}`,
  `https://r.jina.ai/http://${SCC_URL.replace(/^https?:\/\//, '')}`,
];

function cleanText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function extractText(raw: string): string {
  if (typeof DOMParser === 'undefined') {
    return raw;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(raw, 'text/html');
  doc.querySelectorAll('script,style,noscript').forEach(node => node.remove());
  return doc.body?.textContent ?? raw;
}

function looksLikeCourseLine(line: string): boolean {
  return /(bachelor|master|doctor|senior high|^bs\b|^ba\b|^ma\b|^ms\b|^abm\b|^humss\b|^stem\b|^tvl)/i.test(line);
}

function buildCourseId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function inferDegreeAndName(line: string): { degree: string; name: string; code: string } {
  const cleaned = cleanText(line.replace(/^[\-\u2022\d.)\s]+/, ''));
  const parts = cleaned.split(/\s+in\s+/i);

  if (/^bachelor/i.test(cleaned) && parts.length > 1) {
    const degree = parts[0];
    const name = parts.slice(1).join(' in ');
    const code = name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 6);
    return { degree, name, code };
  }

  const tokens = cleaned.split(' ');
  const code = tokens[0].toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 8);
  return {
    degree: /^(ABM|HUMSS|STEM|TVL)/i.test(cleaned) ? 'Senior High School Strand' : 'Program',
    name: cleaned,
    code: code || 'PROGRAM',
  };
}

function parseLiveCourses(pageText: string): Course[] {
  const lines = pageText
    .split(/\r?\n/)
    .map(cleanText)
    .filter(Boolean)
    .filter(line => line.length >= 4 && line.length <= 160);

  const knownCollegeByLabel = new Map<string, string>();
  fallbackColleges.forEach(college => {
    knownCollegeByLabel.set(college.name.toLowerCase(), college.id);
    knownCollegeByLabel.set(college.shortName.toLowerCase(), college.id);
  });

  const parsed: Course[] = [];
  let currentCollege = 'cas';

  for (const line of lines) {
    const lower = line.toLowerCase();
    for (const [label, id] of knownCollegeByLabel.entries()) {
      if (lower.includes(label)) {
        currentCollege = id;
      }
    }

    if (!looksLikeCourseLine(line)) {
      continue;
    }

    const { degree, name, code } = inferDegreeAndName(line);
    const id = buildCourseId(`${currentCollege}-${name}`);

    if (parsed.some(course => course.id === id || course.name.toLowerCase() === name.toLowerCase())) {
      continue;
    }

    parsed.push({
      id,
      code,
      name,
      college: currentCollege,
      degree,
      description: `Program listing from ${SCC_URL}.`,
      duration: /master|ma\b|ms\b/i.test(degree) ? '2 years' : '4 years',
    });
  }

  return parsed;
}

function buildCollegesFromCourses(liveCourses: Course[]): College[] {
  const courseIdsByCollege = new Map<string, string[]>();
  liveCourses.forEach(course => {
    const list = courseIdsByCollege.get(course.college) ?? [];
    list.push(course.id);
    courseIdsByCollege.set(course.college, list);
  });

  return fallbackColleges
    .map(college => ({
      ...college,
      courses: courseIdsByCollege.get(college.id) ?? [],
    }))
    .filter(college => college.courses.length > 0);
}

async function fetchFirstAvailableSource(): Promise<{ source: string; html: string }> {
  const errors: string[] = [];

  for (const candidate of FETCH_CANDIDATES) {
    try {
      const response = await fetch(candidate, {
        method: 'GET',
        headers: { Accept: 'text/html, text/plain, application/json' },
      });

      if (!response.ok) {
        errors.push(`${candidate} -> ${response.status}`);
        continue;
      }

      const html = await response.text();
      if (!html || html.length < 200) {
        errors.push(`${candidate} -> empty response`);
        continue;
      }

      return { source: candidate, html };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'unknown error';
      errors.push(`${candidate} -> ${message}`);
    }
  }

  throw new Error(`Unable to fetch SCC programs page. Attempts: ${errors.join('; ')}`);
}

export interface LiveProgramsPayload {
  colleges: College[];
  courses: Course[];
  source: string;
  isFallback: boolean;
}

export async function loadLiveProgramsData(): Promise<LiveProgramsPayload> {
  try {
    const { source, html } = await fetchFirstAvailableSource();
    const rawText = extractText(html);
    const liveCourses = parseLiveCourses(rawText);

    if (liveCourses.length < 5) {
      return {
        colleges: fallbackColleges,
        courses: fallbackCourses,
        source: `${source} (fallback data used)`,
        isFallback: true,
      };
    }

    return {
      colleges: buildCollegesFromCourses(liveCourses),
      courses: liveCourses,
      source,
      isFallback: false,
    };
  } catch {
    return {
      colleges: fallbackColleges,
      courses: fallbackCourses,
      source: 'local fallback',
      isFallback: true,
    };
  }
}
