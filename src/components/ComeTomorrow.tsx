import { motion, useReducedMotion } from 'framer-motion';
import { GIGACODE } from '../config/brand';
import { useMidnightCountdown } from '../hooks/useMidnightCountdown';
import { pluralize } from '../utils/pluralize';

type Props = {
  streak: number;
};

export function ComeTomorrow({ streak }: Props) {
  const timeLeft = useMidnightCountdown();
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="come-tomorrow"
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2>⏳ Возвращайся завтра!</h2>
      <p>
        Ты уже получил свой промпт на сегодня. Вставь его в {GIGACODE} и смотри магию!
      </p>
      <p className="countdown">
        ⏰ Новый промпт через <span id="timeLeft">{timeLeft}</span>
      </p>
      <p style={{ marginTop: 20, color: 'rgba(255,255,255,0.8)' }}>
        Серия: <strong>
          {streak} {pluralize(streak, 'день', 'дня', 'дней')}
        </strong>{' '}
        подряд! 🔥
      </p>
      {streak === 5 ? (
        <p style={{ color: '#22d3ee', fontWeight: 'bold', marginTop: 15 }}>
          ⚡ Завтра тебя ждёт СЕКРЕТНЫЙ МЕГА-ПРОМПТ! Не пропусти!
        </p>
      ) : null}
    </motion.div>
  );
}
