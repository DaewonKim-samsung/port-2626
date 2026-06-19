export function DotArc() {
  const dots = [
    { cx: 28, cy: 88, r: 10, fill: "var(--accent-rust)" },
    { cx: 52, cy: 62, r: 12, fill: "var(--accent-iron)" },
    { cx: 80, cy: 44, r: 11, fill: "var(--accent-steel)" },
    { cx: 112, cy: 36, r: 10, fill: "var(--accent-rust)" },
    { cx: 144, cy: 44, r: 12, fill: "var(--accent-iron)" },
    { cx: 168, cy: 62, r: 10, fill: "var(--sky-deep)" },
    { cx: 184, cy: 88, r: 9, fill: "var(--accent-steel)" },
  ];

  return (
    <svg
      aria-hidden
      viewBox="0 0 212 100"
      className="h-32 w-96 sm:h-40 sm:w-[28rem]"
    >
      {dots.map((dot, i) => (
        <g key={i} transform={`translate(${dot.cx}, ${dot.cy})`}>
          <circle
            r={dot.r}
            fill={dot.fill}
            className="dot-arc-breathe"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
