import { TallyForm } from "@/components/contact/tally-form";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { contact } from "@/lib/contact";
import { magicCardProps } from "@/lib/ui-constants";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-10"
    >
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-6 sm:pb-32 sm:pt-8">
        <BlurFade inView delay={0}>
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-navy sm:text-4xl"
          >
            {contact.title}
          </h2>
        </BlurFade>

        <BlurFade inView delay={0.06}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/75 sm:text-lg">
            {contact.description}
          </p>
        </BlurFade>

        <BlurFade inView delay={0.12} className="mt-8 sm:mt-10">
          <MagicCard className="rounded-2xl" {...magicCardProps}>
            <TallyForm />
          </MagicCard>
        </BlurFade>
      </div>
    </section>
  );
}
