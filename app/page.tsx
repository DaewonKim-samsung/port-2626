import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Works } from "@/components/sections/works";
import { WaveBackground } from "@/components/decorative/wave-background";

export default function Home() {
  return (
    <main className="relative flex min-h-full w-full flex-1 flex-col overflow-x-hidden">
      <WaveBackground />
      <Hero />
      <About />
      <Works />
    </main>
  );
}
