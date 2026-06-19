"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { contact } from "@/lib/contact";
import { cn } from "@/lib/utils";

const TALLY_SCRIPT = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

function isTallySubmission(event: MessageEvent): boolean {
  if (typeof event.data !== "string" || !event.data.includes("Tally.FormSubmitted")) {
    return false;
  }

  if (
    event.origin !== "https://tally.so" &&
    event.origin !== "https://www.tally.so"
  ) {
    return false;
  }

  try {
    JSON.parse(event.data);
    return true;
  } catch {
    return false;
  }
}

export function TallyForm() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (isTallySubmission(event)) {
        setSubmitted(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    const loadEmbeds = () => {
      window.Tally?.loadEmbeds();
    };

    if (window.Tally) {
      loadEmbeds();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${TALLY_SCRIPT}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener("load", loadEmbeds);
      loadEmbeds();
      return () => existingScript.removeEventListener("load", loadEmbeds);
    }

    const script = document.createElement("script");
    script.src = TALLY_SCRIPT;
    script.async = true;
    script.onload = loadEmbeds;
    script.onerror = loadEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="tally-embed"
      aria-label="문의 폼 영역"
      className={cn(
        "w-full overflow-hidden rounded-[inherit] border border-navy/10 bg-stone/60",
        submitted
          ? "flex min-h-72 items-center justify-center px-6 py-12 sm:min-h-80 sm:px-10"
          : "px-3 py-4 sm:px-6 sm:py-6",
      )}
    >
      {submitted ? (
        <div
          role="status"
          className="flex max-w-md flex-col items-center gap-3 text-center"
        >
          <CheckCircle2
            aria-hidden
            className="size-8 text-accent-rust sm:size-9"
          />
          <p className="text-lg font-semibold leading-relaxed text-navy sm:text-xl">
            {contact.successMessage}
          </p>
        </div>
      ) : (
        <iframe
          data-tally-src={contact.tallyEmbedUrl}
          loading="lazy"
          width="100%"
          height="420"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title={contact.tallyFormTitle}
          className="min-h-[18rem] w-full sm:min-h-[22rem]"
        />
      )}
    </div>
  );
}
