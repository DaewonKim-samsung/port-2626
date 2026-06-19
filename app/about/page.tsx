import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { CloudCard } from "@/components/decorative/cloud-card";
import { WaveBackground } from "@/components/decorative/wave-background";
import { ProfileAvatar } from "@/components/profile-avatar";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: profile.aboutIntro,
};

export default function AboutPage() {
  return (
    <main className="relative flex min-h-full w-full flex-1 flex-col overflow-x-hidden">
      <WaveBackground />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-12 sm:py-16">
        <Button
          asChild
          variant="ghost"
          className="mb-8 -ml-2 text-navy/70 hover:text-navy"
        >
          <Link href="/">
            <ArrowLeft />
            홈으로
          </Link>
        </Button>

        <div className="flex flex-col items-center gap-8">
          <ProfileAvatar size="lg" priority />

          <CloudCard className="max-w-3xl">
            <div className="flex flex-col gap-8">
              <header className="flex flex-col gap-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                  {profile.name}
                </h1>
                <p className="text-lg font-semibold text-navy/70">
                  {profile.tagline}
                </p>
              </header>

              <section aria-labelledby="about-intro">
                <h2
                  id="about-intro"
                  className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy/50"
                >
                  소개
                </h2>
                <p className="text-lg leading-relaxed text-navy/80">
                  {profile.aboutIntro}
                </p>
                <p className="mt-4 text-base text-navy/70">{profile.bio}</p>
              </section>

              <section aria-labelledby="about-career">
                <h2
                  id="about-career"
                  className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy/50"
                >
                  경력 요약
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {profile.highlights.map((tag) => (
                    <li key={tag}>
                      <span className="pill-tag">{tag}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-2xl font-bold text-accent-rust">
                  {profile.experienceYears}
                  <span className="ml-1 text-base font-semibold text-navy/70">
                    년 경력
                  </span>
                </p>
              </section>

              <section aria-labelledby="about-contact">
                <h2
                  id="about-contact"
                  className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy/50"
                >
                  연락처
                </h2>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-navy/15 bg-white/60"
                >
                  <a href={`mailto:${profile.email}`}>
                    <Mail />
                    {profile.email}
                  </a>
                </Button>
              </section>
            </div>
          </CloudCard>
        </div>
      </div>
    </main>
  );
}
