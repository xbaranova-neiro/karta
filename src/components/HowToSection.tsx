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
            </a>
            .
          </div>
        </div>
        <div className="step">
          <div className="step-num">3</div>
          <div className="step-text">
            Следуй инструкции —{' '}
            <a href={GIGACODE_VIDEO_URL} target="_blank" rel="noreferrer">
              урок по ссылке
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
