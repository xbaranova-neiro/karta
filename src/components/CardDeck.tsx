import { motion, useReducedMotion } from 'framer-motion';

const BACKS = ['</>', '{}', 'AI', '**'] as const;

type Props = {
  disabled: boolean;
  flippedIndex: number | null;
  onPick: (index: number, cardEl: HTMLElement) => void;
};

export function CardDeck({ disabled, flippedIndex, onPick }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="cards-container" role="group" aria-label="Выбор карты дня">
      {BACKS.map((label, i) => {
        const isFlipped = flippedIndex === i;
        const isOtherDisabled = disabled && flippedIndex !== null && flippedIndex !== i;

        return (
          <motion.button
            key={label}
            type="button"
            className={`card${isFlipped ? ' flipped selected' : ''}${isOtherDisabled ? ' disabled' : ''}`}
            disabled={disabled}
            onClick={(e) => onPick(i, e.currentTarget)}
            aria-label={`Карта ${i + 1}: ${label}`}
            initial={reduce ? undefined : { opacity: 0, filter: 'blur(8px)' }}
            animate={reduce ? undefined : { opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.06 + i * 0.08 }}
            whileHover={
              reduce || disabled
                ? undefined
                : { y: -10, scale: 1.04, transition: { type: 'spring', stiffness: 400, damping: 22 } }
            }
            whileTap={reduce || disabled ? undefined : { scale: 0.97 }}
          >
            <div className="card-back">{label}</div>
          </motion.button>
        );
      })}
    </div>
  );
}
