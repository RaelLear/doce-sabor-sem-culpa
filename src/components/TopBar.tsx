import { useState, useEffect } from "react";
import { useCountdown } from "@/hooks/use-countdown";

const TopBar = () => {
  const { time, pad } = useCountdown();
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

  return (
    <div className="sticky top-0 z-50" style={{ backgroundColor: "#FF0000" }}>
      <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-0.5 px-4 py-2.5 text-sm font-semibold">
        <span style={{ color: "#FFFF00" }} className="font-bold">Desconto só HOJE</span>
        <span className="text-white">nesta página:</span>
        <span style={{ color: "#FFFF00" }} className="font-bold">{today}</span>
        <span className="text-white">
          Tempo restante: {pad(time.hours)}h {pad(time.minutes)}m {pad(time.seconds)}s
        </span>
      </div>
    </div>
  );
};

export default TopBar;
