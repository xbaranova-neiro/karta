import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { MouseEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { PROMPT_CARDS } from '../data/cards';
import type { PromptCard } from '../types';

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

function findCard(id: number): PromptCard | undefined {
  return PROMPT_CARDS.find((c) => c.id === id);
}

type Props = {
  cardId: number | null;
  onClose: () => void;
};

export function CardModal({ cardId, onClose }: Props) {
  const card = cardId != null ? findCard(cardId) : undefined;
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  const handleOverlayPointer = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (cardId == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [cardId, onClose]);

  useEffect(() => {
    setCopied(false);
  }, [cardId]);

  const handleCopy = async () => {
    if (!card) return;
    const ok = await copyToClipboard(card.prompt);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {card ? (
        <motion.div
          key="modal"
          className="modal-overlay active"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={handleOverlayPointer}
        >
          <motion.div
            className="modal-card"
            initial={reduce ? undefined : { scale: 0.88, y: 28 }}
            animate={{ scale: 1, y: 0 }}
            exit={reduce ? undefined : { scale: 0.92, y: 16 }}
            transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={onClose} aria-label="Закрыть">
              &times;
            </button>
            <motion.div
              className="modal-emoji"
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {card.emoji}
            </motion.div>
            <div className="modal-title" id="modal-title">
              {card.title}
            </div>
            <div
              className="modal-preview-mockup"
              dangerouslySetInnerHTML={{ __html: card.preview ?? '' }}
            />
            <div className="modal-prompt-text">{card.prompt}</div>
            <button
              type="button"
              className={`copy-btn${copied ? ' copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? '✅ Скопировано!' : '📋 Скопировать промпт'}
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
