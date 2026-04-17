import { motion } from 'framer-motion';

export function CTABanner() {
  return (
    <section className="cta-banner" aria-label="Приглашение на вебинар">
      <h3>Хочешь ещё больше промптов?</h3>
      <p>
        На вебинаре покажем, как создавать любые проекты с AI — сайты, боты, приложения — без навыков
        программирования
      </p>
      <div className="cta-features">
        <motion.span className="cta-feature" whileHover={{ y: -2 }}>
          ⚡ 5+ практик
        </motion.span>
        <motion.span className="cta-feature" whileHover={{ y: -2 }}>
          🎯 Пошаговые инструкции
        </motion.span>
        <motion.span className="cta-feature" whileHover={{ y: -2 }}>
          💰 Как на этом зарабатывать
        </motion.span>
      </div>
      <a
        href="https://neiroguru.ru/?utm_source=tg&utm_medium=channel"
        className="cta-btn"
        target="_blank"
        rel="noreferrer"
      >
        Записаться на вебинар →
      </a>
      <div className="cta-subtext">Бесплатно · Онлайн · Без опыта в коде</div>
    </section>
  );
}
