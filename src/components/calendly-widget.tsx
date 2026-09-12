import { useEffect, useRef, useCallback } from "react";
import { CalendarClock } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/damadocorte";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (config: { url: string }) => void;
      closePopupWidget: () => void;
    };
  }
}

export function CalendlyWidget() {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (initializedRef.current) return;
    if (document.querySelector('script[data-calendly="true"]')) {
      initializedRef.current = true;
      return;
    }

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset["calendly"] = "true";
    document.body.appendChild(script);
    initializedRef.current = true;
  }, []);

  return null;
}

export function useCalendlyPopup() {
  const openPopup = useCallback(() => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }, []);

  return openPopup;
}

export function FloatingScheduleButton() {
  const openCalendly = useCalendlyPopup();

  return (
    <button
      type="button"
      onClick={openCalendly}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Agendar horário"
    >
      <CalendarClock className="h-4 w-4" />
      Agendar
    </button>
  );
}
