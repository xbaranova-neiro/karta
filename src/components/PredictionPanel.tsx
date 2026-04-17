import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BRAND, BRAND_URL, WEBINAR_REGISTER_MAX_URL, WEBINAR_REGISTER_TELEGRAM_URL } from '../config/brand';
import type { PromptCard } from '../types';
import { pluralize } from '../utils/pluralize';

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

type Props = {
  visible: boolean;
  card: PromptCard;
  streakAfterPick: number;
};

export function PredictionPanel({ visible, card, streakAfterPick }: Props) {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setCopied(false);
  }, [card.id]);

  const nextHint =
    streakAfterPick >= 1 && streakAfterPick < 6
      ? (() => {
          const daysLeft = 6 - streakAfterPick;
          return `⚡ Возвращайся завтра за новым промптом! ${daysLeft} ${pluralize(daysLeft, 'день', 'дня', 'дней')} до секретного мега-промпта...`;
        })()
      : '';

  const handleCopy = async () => {
    const ok = await copyToClipboard(card.prompt);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="prediction"
          className={`prediction-container show${card.special ? ' special-card' : ''}`}
          initial={reduce ? undefined : { opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.55, ease: [0.175, 0.885, 0.32, 1.275] }}
          layout
        >
          <motion.div
            className="card-emoji"
            initial={reduce ? undefined : { scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 18 }}
          >
            {card.emoji}
          </motion.div>
          <div className="card-title">{card.title}</div>

          <div className="preview-label">Что получится:</div>
          <div className="preview-block">
            <div
              className="preview-topbar"
              style={{ background: '#111', padding: '6px 10px', borderRadius: '12px 12px 0 0' }}
            >
              <div className="preview-dot r" />
              <div className="preview-dot y" />
              <div className="preview-dot g" />
            </div>
            <div
              className="preview-mockup"
              dangerouslySetInnerHTML={{ __html: card.preview ?? '' }}
            />
          </div>

          <div className="prompt-label">Скопируй и вставь в {BRAND}:</div>
          <div className="prompt-text">{card.prompt}</div>
          <button
            type="button"
            className={`copy-btn${copied ? ' copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? '✅ Скопировано!' : '📋 Скопировать промпт'}
          </button>

          <div className="steps-block">
            <div className="steps-title">📖 Инструкция — делай по шагам:</div>
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-text">
                Нажми кнопку <strong>«Скопировать промпт»</strong> выше — она станет зелёной, значит
                скопировано
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-text">
                Открой{' '}
                <a href={BRAND_URL} target="_blank" rel="noreferrer">
                  <strong>{BRAND}</strong>
                </a>{' '}
                и вставь промпт в чат. Если нет аккаунта — зарегайся бесплатно (нужна только почта)
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-text">
                Дальше следуй инструкции по работе с {BRAND} —{' '}
                <a href={BRAND_URL} target="_blank" rel="noreferrer">
                  по ссылке
                </a>
                .
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-text">
                Кликни в поле ввода внизу страницы, нажми <code>Ctrl+V</code> (на Маке —{' '}
                <code>Cmd+V</code>) и отправь сообщение
              </div>
            </div>
          </div>

          {card.special ? (
            <div id="webinarInvite">
              <p style={{ marginBottom: 12, color: '#4a5568', fontWeight: 600 }}>
                🎯 Хочешь ещё больше? Запишись на вебинар:
              </p>
              <div className="webinar-invite-actions">
                <a
                  href={WEBINAR_REGISTER_TELEGRAM_URL}
                  className="webinar-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  РЕГИСТРАЦИЯ ТЕЛЕГРАМ 👉
                </a>
                <a
                  href={WEBINAR_REGISTER_MAX_URL}
                  className="webinar-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  РЕГИСТРАЦИЯ МАХ 👉
                </a>
              </div>
              <p style={{ marginTop: 15, color: '#4a5568' }}>
                Научись создавать проекты с AI за минуты, а не недели!
              </p>
            </div>
          ) : null}

          {nextHint ? <div className="next-day-hint">{nextHint}</div> : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
