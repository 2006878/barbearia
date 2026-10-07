import { useCallback } from "react";
import { CalendarClock } from "lucide-react";

const SCHEDULING_URL = "https://jim.com/a/alciene-maria";

export function useCalendlyPopup() {
  const openPopup = useCallback(() => {
    window.open(SCHEDULING_URL, "_blank", "noopener,noreferrer");
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
