import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';

type Burst = { x: number; y: number; id: number };

type Particle = {
  key: string;
  x: number;
  y: number;
  tx: number;
  ty: number;
  size: number;
  color: string;
  duration: number;
};

const COLORS = ['#22d3ee', '#06b6d4', '#a78bfa', '#10b981', '#3b82f6', '#ffffff'];

export function ParticlesBurst({ burst }: { burst: Burst | null }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!burst) return;
    const next: Particle[] = [];
    for (let i = 0; i < 24; i++) {
      const size = Math.random() * 8 + 4;
      const tx = (Math.random() - 0.5) * 300;
      const ty = (Math.random() - 0.5) * 300 - 100;
      next.push({
        key: `${burst.id}-${i}`,
        x: burst.x,
        y: burst.y,
        tx,
        ty,
        size,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
        duration: Math.random() * 0.6 + 0.6,
      });
    }
    setParticles(next);
    const t = window.setTimeout(() => setParticles([]), 1200);
    return () => window.clearTimeout(t);
  }, [burst]);

  return (
    <div className="particles-container" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.key}
          className="particle"
          style={
            {
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: p.color,
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
              animationDuration: `${p.duration}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
