import { ProfileAvatar } from "@/components/profile-avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { magicCardProps } from "@/lib/ui-constants";
import { profile } from "@/lib/profile";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative z-10">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-12 sm:pb-32 sm:pt-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-6">
            <BlurFade inView delay={0}>
              <MagicCard className="rounded-2xl" {...magicCardProps}>
                <div className="flex items-center gap-4 p-6">
                  <ProfileAvatar size="sm" />
                  <h2
                    id="about-heading"
                    className="text-3xl font-bold tracking-tight text-navy sm:text-4xl"
                  >
                    About
                  </h2>
                </div>
              </MagicCard>
            </BlurFade>

            <BlurFade inView delay={0.1}>
              <MagicCard className="rounded-2xl" {...magicCardProps}>
                <p className="max-w-prose p-6 text-lg leading-relaxed text-navy/75">
                  {profile.bio}
                </p>
              </MagicCard>
            </BlurFade>

            <BlurFade inView delay={0.2}>
              <MagicCard className="rounded-2xl" {...magicCardProps}>
                <div className="p-6">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-navy/50">
                    연락처
                  </h3>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-base font-semibold text-accent-rust underline-offset-4 hover:underline"
                  >
                    {profile.email}
                  </a>
                </div>
              </MagicCard>
            </BlurFade>
          </div>

          <BlurFade inView delay={0.15}>
            <MagicCard className="h-full rounded-2xl" {...magicCardProps}>
              <aside className="flex flex-col gap-4 p-6 md:min-w-48">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy/50">
                  경력 요약
                </h3>
                <ul className="flex flex-wrap gap-2 md:flex-col md:gap-2.5">
                  {profile.highlights.map((tag, index) => (
                    <BlurFade key={tag} inView delay={0.22 + index * 0.06}>
                      <li>
                        <span className="pill-tag">{tag}</span>
                      </li>
                    </BlurFade>
                  ))}
                </ul>
                <BlurFade inView delay={0.4}>
                  <dl className="mt-2 flex items-baseline gap-2 border-t border-navy/15 pt-4">
                    <dt className="text-sm font-medium text-navy/50">총 경력</dt>
                    <dd className="text-2xl font-bold text-accent-rust">
                      {profile.experienceYears}
                      <span className="ml-0.5 text-base font-semibold">년</span>
                    </dd>
                  </dl>
                </BlurFade>
              </aside>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
