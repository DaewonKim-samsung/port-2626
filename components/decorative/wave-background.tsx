import Image from "next/image";

export function WaveBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#fdfbf7]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="wave-flow-track flex h-full w-[200%] scale-[1.02] blur-sm">
          {[0, 1].map((index) => (
            <div key={index} className="relative h-full w-1/2 shrink-0">
              <Image
                src="/waves-bg.svg"
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
