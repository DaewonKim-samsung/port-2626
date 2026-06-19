<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# my-port — Agent Rules

## 목적

- **개인 포트폴리오 사이트**
- 단순 이력서가 아닌 **AI 시대의 브랜딩 사이트**
- 방문자에게 정체성·역량이 빠르게 전달되어야 한다
- 콘텐츠는 `lib/`에, 섹션 컴포넌트는 레이아웃·표현만 담당

## 기술 스택

| 영역 | 사용 |
|------|------|
| 프레임워크 | **Next.js** (App Router, RSC) |
| UI | **ShadCN** (`radix-nova`) |
| 아이콘 | **Lucide** (`lucide-react`) |
| 스타일 | Tailwind CSS v4, CSS 변수 (`app/globals.css`) |

ShadCN 컴포넌트가 없으면 직접 만들기 전에 CLI로 추가한다.

```bash
bunx shadcn@latest add <component>
```

## 디자인 원칙

### Apple 스타일의 깔끔함

- 여백을 충분히 둔다 (`gap`, `py`, `px`)
- 타이포그래피 계층을 명확히: 제목 → 본문 → 보조 텍스트
- 장식·강조는 절제한다 (섹션당 포인트 1~2곳)
- border, shadow, gradient 남용 금지

### Linear 수준의 정돈된 UI

- 그리드·플렉스 정렬 일관 유지 (`max-w-*`, `mx-auto`)
- spacing, radius, font-size 스케일 통일
- hover / focus 상태 필수 (접근성 포함)
- `text-muted-foreground`, `border-border` 등 **디자인 토큰** 우선

### ShadCN 컴포넌트 우선 활용

- Button, Card, Badge 등 → `@/components/ui/*`
- ShadCN에 없을 때만 `components/sections/` 또는 `components/decorative/`에 커스텀
- `components/ui/` 원본은 필요할 때만 수정

### 아이콘

- **Lucide만** 사용
- 장식 SVG → `components/decorative/`

## 프로젝트 구조

```
app/                    # 라우트, layout, globals.css
components/
  sections/             # Hero, About 등 페이지 섹션
  decorative/           # 파도, cloud 등 시각 장식
  ui/                   # ShadCN
lib/
  profile.ts            # 프로필·콘텐츠
  utils.ts              # cn()
public/                 # 정적 에셋
```

## 코딩 규칙

- **최소 diff** — 요청 범위 밖 수정 금지
- **Server Component 기본** — `"use client"`는 상호작용 필요 시만
- **시맨틱 HTML** — `section`, `h1`~`h2`, `aria-labelledby`
- **콘텐츠 분리** — 문자열은 `lib/` 데이터 파일로
- **커밋·PR** — 사용자 명시 요청 시만

## 작업 전 체크리스트

1. Next.js API → `node_modules/next/dist/docs/` 확인
2. UI 추가 → ShadCN registry 확인
3. 스타일 → `globals.css` 토큰과 충돌 없는지 확인
4. `npm run build` 통과 확인
