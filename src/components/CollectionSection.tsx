import { motion } from 'framer-motion';
import { PROMPT_CARDS } from '../data/cards';
import type { GameData } from '../types';
import { pluralize } from '../utils/pluralize';

function progressMessage(collectionLen: number): string {
  const progress = collectionLen;
  const left = 12 - progress;
  if (progress === 0) return 'Начни собирать промпты!';
  if (progress < 6) {
    return `Отлично! Ещё ${left} ${pluralize(left, 'промпт', 'промпта', 'промптов')} до полной коллекции`;
  }
  if (progress < 12) {
    return `Почти готово! ${pluralize(left, 'Остался', 'Осталось', 'Осталось')} ${left} ${pluralize(left, 'промпт', 'промпта', 'промптов')}`;
  }
  return '🎉 Все 12 промптов собраны!';
}

type Props = {
  data: GameData;
  onOpenCard: (id: number) => void;
};

export function CollectionSection({ data, onOpenCard }: Props) {
  const hint =
    data.collection.length > 0 ? 'Нажми на карту, чтобы скопировать промпт' : '';

  return (
    <section className="collection" aria-labelledby="collection-heading">
      <h3 id="collection-heading">Твоя коллекция промптов</h3>
      <div className="collection-grid" role="list">
        {PROMPT_CARDS.map((card) => {
          const unlocked = data.collection.includes(card.id);
          return (
            <motion.button
              key={card.id}
              type="button"
              role="listitem"
              className={`collection-card${unlocked ? ' unlocked' : ' locked'}`}
              disabled={!unlocked}
              onClick={() => unlocked && onOpenCard(card.id)}
              aria-label={unlocked ? `Открыть промпт: ${card.title}` : 'Закрытая карта'}
              whileHover={unlocked ? { scale: 1.06, y: -3 } : undefined}
              whileTap={unlocked ? { scale: 0.98 } : undefined}
            >
              {unlocked ? card.emoji : '?'}
            </motion.button>
          );
        })}
      </div>
      <p className="progress-text">{progressMessage(data.collection.length)}</p>
      {hint ? <p className="collection-hint">{hint}</p> : null}
    </section>
  );
}
