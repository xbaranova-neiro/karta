import { BRAND, BRAND_URL, BRAND_WORK_INSTRUCTION_URL } from '../config/brand';

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
            <a href={BRAND_URL} target="_blank" rel="noreferrer">
              <strong>{BRAND}</strong>
            </a>{' '}
            и вставь промпт в чат. Если нет аккаунта — зарегайся бесплатно
          </div>
        </div>
        <div className="step">
          <div className="step-num">3</div>
          <div className="step-text">
            Дальше следуй инструкции по работе с {BRAND} —{' '}
            <a href={BRAND_WORK_INSTRUCTION_URL} target="_blank" rel="noreferrer">
              по ссылке
            </a>
            .
          </div>
        </div>
        <div className="step">
          <div className="step-num">4</div>
          <div className="step-text">
            Кликни в поле ввода, вставь промпт (<code>Ctrl+V</code> / <code>Cmd+V</code>) и нажми{' '}
            <strong>Enter</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
