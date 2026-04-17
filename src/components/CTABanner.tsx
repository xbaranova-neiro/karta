import { motion } from 'framer-motion';
import { WEBINAR_REGISTER_MAX_URL, WEBINAR_REGISTER_TELEGRAM_URL } from '../config/brand';

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
      <div className="cta-buttons">
        <a
          href={WEBINAR_REGISTER_TELEGRAM_URL}
          className="cta-btn"
          target="_blank"
          rel="noreferrer"
        >
          РЕГИСТРАЦИЯ ТЕЛЕГРАМ →
        </a>
        <a href={WEBINAR_REGISTER_MAX_URL} className="cta-btn" target="_blank" rel="noreferrer">
          РЕГИСТРАЦИЯ МАХ →
        </a>
      </div>
      <div className="cta-subtext">Бесплатно · Онлайн · Без опыта в коде</div>
    </section>
  );
}
