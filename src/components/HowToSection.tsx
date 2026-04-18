import { GIGACODE, GIGACODE_LANDING_URL, GIGACODE_VIDEO_URL } from '../config/brand';

export function HowToSection() {
  return (
    <section className="how-to-block" aria-labelledby="howto-heading">
      <h3 id="howto-heading">📖 Как использовать промпт</h3>
      <div className="how-to-steps">
        <div className="step">
          <div className="step-num">1</div>
          <div className="step-text">
            Нажми на карту из коллекции выше и скопируй промпт кнопкой{' '}
            <strong>«Скопировать промпт»</strong>
          </div>
        </div>
        <div className="step">
          <div className="step-num">2</div>
          <div className="step-text">
            Открой{' '}
            <a href={GIGACODE_LANDING_URL} target="_blank" rel="noreferrer">
              <strong>{GIGACODE}</strong>
            </a>{' '}
            (страница на GitVerse) и вставь промпт в CodeChat, когда GigaCode подключён. Нет доступа
            — зарегайся, как в инструкциях к сервису.
          </div>
        </div>
        <div className="step">
          <div className="step-num">3</div>
          <div className="step-text">
            Следуй инструкциям: видеоурок на RUTUBE —{' '}
            <a href={GIGACODE_VIDEO_URL} target="_blank" rel="noreferrer">
              урок, по ссылке
            </a>
            ; раздел {GIGACODE} —{' '}
            <a href={GIGACODE_LANDING_URL} target="_blank" rel="noreferrer">
              сайт, по ссылке
            </a>
            .
          </div>
        </div>
        <div className="step">
          <div className="step-num">4</div>
          <div className="step-text">
            Кликни в поле ввода CodeChat, вставь промпт (<code>Ctrl+V</code> / <code>Cmd+V</code>) и
            нажми <strong>Enter</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
