import { WorkCard } from "@/components/work-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { works } from "@/lib/works";

export function Works() {
  return (
    <section id="works" aria-labelledby="works-heading" className="relative z-10">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-6 sm:pb-32 sm:pt-8">
        <BlurFade inView delay={0}>
          <h2
            id="works-heading"
            className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Works
          </h2>
        </BlurFade>

        <ul className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <li key={work.slug} className="h-full">
              <WorkCard work={work} delay={index * 0.08} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
