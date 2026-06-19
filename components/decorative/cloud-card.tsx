import { cn } from "@/lib/utils";

type CloudCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "bright";
};

const variantStyles = {
  default: {
    bump: "bg-stone",
    panel:
      "border-navy/10 bg-stone shadow-[0_12px_48px_-16px_rgba(15,20,30,0.35)]",
  },
  bright: {
    bump: "bg-white/90",
    panel:
      "border-sky-200/80 bg-linear-to-br from-white via-[#f0f9ff] to-[#fff7ed] shadow-[0_16px_48px_-12px_rgba(56,189,248,0.35)] ring-1 ring-sky-100/80 backdrop-blur-sm",
  },
} as const;

export function CloudCard({
  children,
  className,
  variant = "default",
}: CloudCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className={cn("relative mx-auto w-full max-w-2xl", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -left-6 top-8 h-14 w-20 rounded-full",
          styles.bump,
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-4 top-16 h-12 w-16 rounded-full",
          styles.bump,
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-4 left-1/4 h-10 w-14 rounded-full",
          styles.bump,
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-6 right-1/4 h-14 w-20 rounded-full",
          styles.bump,
        )}
      />
      <div
        className={cn(
          "relative rounded-[2.5rem] border px-8 py-12 sm:rounded-[3.5rem] sm:px-12 sm:py-14",
          styles.panel,
        )}
      >
        {variant === "bright" && (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#67e8f9]/25 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#fdba74]/20 blur-2xl"
            />
          </>
        )}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
