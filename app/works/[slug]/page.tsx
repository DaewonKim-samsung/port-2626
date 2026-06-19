import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { WaveBackground } from "@/components/decorative/wave-background";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { profile } from "@/lib/profile";
import { magicCardProps } from "@/lib/ui-constants";
import { getAllWorkSlugs, getWorkBySlug } from "@/lib/works";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return { title: "작업물을 찾을 수 없습니다" };
  }

  return {
    title: `${work.title} | ${profile.name}`,
    description: work.summary,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="relative flex min-h-full w-full flex-1 flex-col overflow-x-hidden">
      <WaveBackground />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-12 sm:py-16">
        <BlurFade delay={0}>
          <Button
            asChild
            variant="ghost"
            className="mb-8 -ml-2 text-navy/70 hover:text-navy"
          >
            <Link href="/#works">
              <ArrowLeft />
              모든 작업물 보기
            </Link>
          </Button>
        </BlurFade>

        <MagicCard className="rounded-2xl" {...magicCardProps}>
          <article className="flex flex-col gap-8 p-6 sm:p-8">
            <BlurFade delay={0.08}>
              <header className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  {work.title}
                </h1>
                <p className="text-base text-navy/70">{work.summary}</p>
              </header>
            </BlurFade>

            <BlurFade delay={0.16}>
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  fill
                  priority
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            </BlurFade>

            <BlurFade delay={0.24}>
              <div className="flex flex-col gap-4 text-lg leading-relaxed text-navy/80">
                {work.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </BlurFade>

            {work.links.length > 0 && (
              <BlurFade delay={0.32}>
                <div className="flex flex-wrap gap-3">
                  {work.links.map((link) => (
                    <Button
                      key={link.label}
                      asChild
                      variant="outline"
                      className="rounded-full border-navy/15 bg-white/60"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <ExternalLink />
                      </a>
                    </Button>
                  ))}
                </div>
              </BlurFade>
            )}
          </article>
        </MagicCard>
      </div>
    </main>
  );
}
