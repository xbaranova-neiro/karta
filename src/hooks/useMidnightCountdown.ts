import { useEffect, useState } from 'react';

function formatMidnightCountdown(): string {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const diff = Math.max(0, tomorrow.getTime() - now.getTime());
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return `${hours}ч ${minutes}м ${seconds}с`;
}

/** Текст «чч мм сс» до полуночи по локальному времени */
export function useMidnightCountdown(): string {
  const [label, setLabel] = useState(formatMidnightCountdown);

  useEffect(() => {
    function tick() {
      setLabel(formatMidnightCountdown());
    }
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return label;
}
