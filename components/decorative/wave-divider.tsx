export function WaveDivider() {
  return (
    <div aria-hidden className="relative z-10 -mt-px w-full leading-none">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="var(--stone)"
        />
      </svg>
    </div>
  );
}
