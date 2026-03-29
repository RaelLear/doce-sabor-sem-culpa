import { useState, useEffect } from "react";

const initialTime = { hours: 12, minutes: 14, seconds: 46 };

// Shared singleton so all consumers show the same time
let sharedTime = { ...initialTime };
let listeners: Set<(t: typeof initialTime) => void> = new Set();
let intervalStarted = false;

function startInterval() {
  if (intervalStarted) return;
  intervalStarted = true;
  setInterval(() => {
    let { hours, minutes, seconds } = sharedTime;
    seconds--;
    if (seconds < 0) { seconds = 59; minutes--; }
    if (minutes < 0) { minutes = 59; hours--; }
    if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
    sharedTime = { hours, minutes, seconds };
    listeners.forEach(fn => fn({ ...sharedTime }));
  }, 1000);
}

export function useCountdown() {
  const [time, setTime] = useState({ ...sharedTime });

  useEffect(() => {
    startInterval();
    listeners.add(setTime);
    return () => { listeners.delete(setTime); };
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  return { time, pad };
}
