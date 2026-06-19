import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { magicCardProps } from "@/lib/ui-constants";
import type { Work } from "@/lib/works";

type WorkCardProps = {
  work: Work;
  delay?: number;
};

export function WorkCard({ work, delay = 0 }: WorkCardProps) {
  return (
    <BlurFade inView delay={delay} className="h-full">
      <MagicCard
        className="flex h-full flex-col rounded-2xl [&>div.relative.z-40]:flex [&>div.relative.z-40]:h-full [&>div.relative.z-40]:flex-1 [&>div.relative.z-40]:flex-col"
        {...magicCardProps}
      >
        <div className="flex h-full flex-col">
          <Link
            href={`/works/${work.slug}`}
            aria-label={`${work.title} 상세 보기`}
            className="group flex h-full flex-col overflow-hidden rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
          >
            <div className="relative aspect-video w-full shrink-0 overflow-hidden">
              <Image
                src={work.thumbnail}
                alt={work.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="text-lg font-bold tracking-tight text-navy">
                {work.title}
              </h3>
              <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-navy/70">
                {work.summary}
              </p>
            </div>
          </Link>
        </div>
      </MagicCard>
    </BlurFade>
  );
}
