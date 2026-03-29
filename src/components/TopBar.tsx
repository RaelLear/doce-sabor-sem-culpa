import { useState, useEffect } from "react";

const TopBar = () => {
  const [time, setTime] = useState({ hours: 12, minutes: 14, seconds: 46 });
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date().toLocaleDateString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setToday(now);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 bg-destructive">
      <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-0.5 px-4 py-2.5 text-sm font-semibold">
        <span className="text-accent font-bold">Desconto só HOJE</span>
        <span className="text-white">nesta página:</span>
        <span className="text-accent font-bold">{today}</span>
        <span className="text-white">
          Tempo restante: {pad(time.hours)}h {pad(time.minutes)}m {pad(time.seconds)}s
        </span>
      </div>
    </div>
  );
};

export default TopBar;
