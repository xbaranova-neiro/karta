import { useEffect, useState } from 'react';

/** Текст «чч мм сс» до полуночи по локальному времени */
export function useMidnightCountdown(): string {
  const [label, setLabel] = useState('');

  useEffect(() => {
    function tick() {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setLabel(`${hours}ч ${minutes}м ${seconds}с`);
    }
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return label;
}
