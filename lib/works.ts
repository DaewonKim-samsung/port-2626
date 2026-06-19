export type WorkLink = {
  label: string;
  href: string;
};

export type Work = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  thumbnail: string;
  links: WorkLink[];
};

export const works: Work[] = [
  {
    slug: "ai-avm",
    title: "AI 추정가 서비스",
    summary: "전국 부동산 월별 추정가를 ML로 산출·제공하는 AVM",
    description:
      "부동산 자동가치산정모형(AVM)을 활용해 전국 모든 부동산의 추정 가격을 월별로 산출·제공하는 서비스입니다. 국토교통부 실거래가 등 공공데이터를 CatBoost 등 머신러닝 모델로 학습해 현장조사 없이 통계적으로 점(point) 형태의 가격을 즉시 제공하며, 집합건물은 호 단위까지 추정합니다.\n\n제공 채널은 지도 기반 웹서비스(vos.land), 금융기관 전용 플랫폼(파이퍼, piper.financial), AVM 보고서 PDF, API입니다. 기업은행·수협·신협·단위농협·대출모집 협약조합 등 금융기관이 주요 고객이며, 경쟁 서비스(밸류맵, 디스코 등) 대비 보수적인 산정 기조로 대출 참고용 지표로 선호됩니다.\n\n향후 기존 ML 모형에 Narrative Vector(문맥적 논리를 수치화한 벡터)를 결합해 해석 가능성을 보강하는 방향으로 진화 중입니다.",
    thumbnail: "/works/ai-avm.png",
    links: [
      { label: "vos.land", href: "https://vos.land" },
      { label: "piper.financial", href: "https://piper.financial" },
    ],
  },
  {
    slug: "price-advisory",
    title: "가격자문 서비스",
    summary: "현장조사 없이 2시간 내 응답하는 B2B 가격자문 플랫폼",
    description:
      "감정평가법인이 현장조사 없이 부동산 가격을 제시하는 의뢰-응답형 서비스입니다. 자체 전산망으로 평가법인과 금융기관을 연결하는 B2B 플랫폼 형태로 운영되며, 대출 프로세스에 API로 실시간 연동됩니다.\n\n영업일 기준 2시간 응답을 보장하고, API·전문·AVM 데이터베이스 등 다양한 형식으로 결과를 발송합니다. 비주거 집합건물까지 대응하며(타 협회 시스템은 공동주택만 가능), AVM 이용 고객에게는 첫 1년차 가격자문을 무료 제공합니다.\n\n케이뱅크·토스뱅크 담보대출 프로세스 API 연동 등 온라인 은행 최초의 평가 플랫폼 사례를 포함합니다. AI 추정가(1차 스크리닝) → 가격자문(2차 정밀화) → 감정평가(3차 확정) 파이프라인의 중간 단계로, 하나의 의뢰 건에 세 서비스가 순차 연결됩니다.",
    thumbnail: "/works/price-advisory.png",
    links: [{ label: "piper.financial", href: "https://piper.financial" }],
  },
  {
    slug: "devbrothers-coloso",
    title: "데브브라더스 · Coloso 강의",
    summary: "AI 주도 개발·MCP·SaaS 수익화 Coloso 3부작",
    description:
      "콜로소(Coloso)에서 제공하는 프로그래머 개발동생의 개발 교육 시리즈입니다. 강사는 공간의가치 AI 추정가·파이퍼 등 부동산 금융 프로덕트 개발 경험을 바탕으로, AI 시대 실무 개발 역량을 전달합니다.\n\n【1편 · AI 풀스택 웹개발】총 30회·13시간 46분 · 기초~중급\nChatGPT·V0·Cursor로 AI 주도 개발 방법론과 풀스택 웹앱을 기획부터 배포까지 완성합니다. 주니어·경력 개발자, AI로 개발에 입문하려는 비전공자에게 추천합니다.\n\n【2편 · MCP 코드 자동화】총 22회·9시간 48분 · 기초~중급\nModel Context Protocol을 원리부터 구현·보안·운영까지 다루는 실전 가이드입니다. MCP 서버/클라이언트 구축, Docker 운영, Cursor·Claude 연동 워크플로우를 학습합니다. 현업 개발자·엔터프라이즈 보안·AI 에이전트 기획자에게 적합합니다.\n\n【3편 · 실전 SaaS 개발】총 36회·15시간 44분 · 입문~중급\n아이디어를 QR·URL 단축·전자책 스토어·LLM 문서 요약 등 수익화 SaaS로 완성합니다. Supabase·Vercel·Toss·Stripe 결제 연동과 운영(SEO, Sentry)까지 다룹니다. 솔로프리너·글로벌 SaaS 지향 개발자에게 추천합니다.",
    thumbnail: "/works/devbrothers-coloso.png",
    links: [
      {
        label: "1편 · AI 풀스택",
        href: "https://coloso.co.kr/products/programmer-devbrother",
      },
      {
        label: "2편 · MCP 자동화",
        href: "https://coloso.co.kr/products/programmer-devbrother2",
      },
      {
        label: "3편 · SaaS 개발",
        href: "https://coloso.co.kr/products/programmer-devbrother3",
      },
    ],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return works.map((work) => work.slug);
}
