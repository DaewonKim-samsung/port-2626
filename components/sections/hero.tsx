import Link from "next/link";
import { CloudCard } from "@/components/decorative/cloud-card";
import { DotArc } from "@/components/decorative/dot-arc";
import { HeroMeshLight } from "@/components/decorative/hero-mesh-light";
import { ProfileAvatar } from "@/components/profile-avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative z-10 overflow-hidden pb-4 pt-16 sm:pt-24"
    >
      <HeroMeshLight />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 px-6">
        <div className="relative flex flex-col items-center">
          <BlurFade
            delay={0}
            className="absolute -top-6 left-1/2 -translate-x-1/2"
          >
            <DotArc />
          </BlurFade>
          <BlurFade delay={0.1} className="relative z-10 mt-10 sm:mt-12">
            <ProfileAvatar priority />
          </BlurFade>
        </div>

        <BlurFade delay={0.2} className="w-full">
          <CloudCard variant="bright">
            <div className="flex flex-col items-center gap-5 text-center">
              <BlurFade delay={0.28}>
                <h1
                  id="hero-heading"
                  className="text-4xl font-bold tracking-tight text-navy sm:text-5xl"
                >
                  {profile.name}
                </h1>
              </BlurFade>
              <BlurFade delay={0.36}>
                <p className="text-lg font-semibold text-sky-600 sm:text-xl">
                  {profile.tagline}
                </p>
              </BlurFade>
              <BlurFade delay={0.44}>
                <Button
                  asChild
                  size="lg"
                  className="mt-2 h-11 rounded-full bg-linear-to-r from-[#0ea5e9] to-[#38bdf8] px-8 text-base font-bold text-white shadow-[0_8px_24px_-8px_rgba(14,165,233,0.55)] hover:from-[#0284c7] hover:to-[#0ea5e9]"
                >
                  <Link href="/about">더 알아보기 →</Link>
                </Button>
              </BlurFade>
            </div>
          </CloudCard>
        </BlurFade>
      </div>
    </section>
  );
}
