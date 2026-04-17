import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { CardDeck } from './components/CardDeck';
import { CardModal } from './components/CardModal';
import { CollectionSection } from './components/CollectionSection';
import { ComeTomorrow } from './components/ComeTomorrow';
import { CTABanner } from './components/CTABanner';
import { HowToSection } from './components/HowToSection';
import { MotionReveal } from './components/MotionReveal';
import { ParticlesBurst } from './components/ParticlesBurst';
import { PredictionPanel } from './components/PredictionPanel';
import { pickPromptForDay } from './lib/gamePick';
import {
  canPlayToday,
  getTodayDate,
  getYesterdayDateString,
  loadGameData,
  saveGameData,
} from './lib/storage';
import type { PromptCard } from './types';

export default function App() {
  const reduce = useReducedMotion();
  const [gameData, setGameData] = useState(loadGameData);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [deckLocked, setDeckLocked] = useState(false);
  const [showPrediction, setShowPrediction] = useState(false);
  const [sessionCard, setSessionCard] = useState<PromptCard | null>(null);
  const [burst, setBurst] = useState<{ x: number; y: number; id: number } | null>(null);
  const [modalCardId, setModalCardId] = useState<number | null>(null);

  const canPlay = canPlayToday(gameData, getTodayDate());

  const handlePick = useCallback(
    (index: number, cardEl: HTMLElement) => {
      if (!canPlay) return;

      const yesterday = getYesterdayDateString();
      const result = pickPromptForDay(gameData, getTodayDate(), yesterday);
      if (!result) return;

      saveGameData(result.next);
      setGameData(result.next);
      setSessionCard(result.card);

      const r = cardEl.getBoundingClientRect();
      setBurst({
        x: r.left + r.width / 2,
        y: r.top + r.height / 2,
        id: Date.now(),
      });

      setFlippedIndex(index);
      setDeckLocked(true);

      window.setTimeout(() => setShowPrediction(true), 300);
    },
    [gameData, canPlay],
  );

  const openModal = useCallback((id: number) => setModalCardId(id), []);
  const closeModal = useCallback(() => setModalCardId(null), []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        К основному содержимому
      </a>

      <div className="bg-orb bg-orb-1" aria-hidden />
      <div className="bg-orb bg-orb-2" aria-hidden />
      <div className="bg-orb bg-orb-3" aria-hidden />
      <ParticlesBurst burst={burst} />

      <div className="container">
        <header>
          {reduce ? (
            <>
              <h1 className="hero-title">⚡ Промпт Дня</h1>
              <p className="subtitle hero-subtitle">Создай свои первые разработки самостоятельно</p>
            </>
          ) : (
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="hero-title"
                variants={{
                  hidden: { opacity: 0, y: -14 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                ⚡ Промпт Дня
              </motion.h1>
              <motion.p
                className="subtitle hero-subtitle"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Создай свои первые разработки самостоятельно
              </motion.p>
            </motion.div>
          )}
        </header>

        <MotionReveal>
          <motion.div
            className="stats-bar"
            whileHover={reduce ? undefined : { scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 420, damping: 26 }}
          >
            <div className="stat">
              <span className="stat-value">{gameData.streak}</span>
              <span className="stat-label">
                <span className="streak-fire">⚡</span> Дней подряд
              </span>
            </div>
            <div className="stat">
              <span className="stat-value">{gameData.collection.length}/12</span>
              <span className="stat-label">{`{ }`} Собрано промптов</span>
            </div>
          </motion.div>
        </MotionReveal>

        <main id="main-content">
          <MotionReveal className="reveal-on-scroll reveal-delay-2">
            <section aria-label="Ежедневный промпт">
              {!canPlay ? (
                <ComeTomorrow streak={gameData.streak} />
              ) : (
                <>
                  <AnimatePresence>
                    {!showPrediction ? (
                      <motion.p
                        key="instr"
                        className="instruction"
                        id="instruction"
                        initial={reduce ? undefined : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={reduce ? undefined : { opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                      >
                        Выбери карту — получи готовый промпт
                      </motion.p>
                    ) : null}
                  </AnimatePresence>

                  <CardDeck
                    disabled={deckLocked}
                    flippedIndex={flippedIndex}
                    onPick={handlePick}
                  />

                  {sessionCard ? (
                    <PredictionPanel
                      visible={showPrediction}
                      card={sessionCard}
                      streakAfterPick={gameData.streak}
                    />
                  ) : null}
                </>
              )}
            </section>
          </MotionReveal>

          <MotionReveal>
            <CollectionSection data={gameData} onOpenCard={openModal} />
          </MotionReveal>

          <MotionReveal>
            <HowToSection />
          </MotionReveal>

          <MotionReveal>
            <CTABanner />
          </MotionReveal>
        </main>
      </div>

      <CardModal cardId={modalCardId} onClose={closeModal} />
    </>
  );
}
