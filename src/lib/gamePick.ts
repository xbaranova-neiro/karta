import { PROMPT_CARDS, SPECIAL_CARD } from '../data/cards';
import type { GameData, PromptCard } from '../types';

/**
 * Один «ход» дня: обновляет серию, дату и коллекцию, возвращает выпавшую карту.
 * Возвращает null, если сегодня уже играли.
 */
export function pickPromptForDay(
  prev: GameData,
  today: string,
  yesterdayStr: string,
): { next: GameData; card: PromptCard } | null {
  if (prev.lastDate === today) return null;

  const next: GameData = {
    ...prev,
    collection: [...prev.collection],
  };

  if (next.lastDate) {
    if (next.lastDate === yesterdayStr) next.streak = prev.streak + 1;
    else if (next.lastDate !== today) next.streak = 1;
  } else {
    next.streak = 1;
  }

  next.lastDate = today;

  let card: PromptCard;
  if (next.streak === 6 && !prev.specialUnlocked) {
    card = SPECIAL_CARD;
    next.specialUnlocked = true;
  } else {
    const notCollected = PROMPT_CARDS.filter((c) => !next.collection.includes(c.id));
    if (notCollected.length > 0) {
      card = notCollected[Math.floor(Math.random() * notCollected.length)];
    } else {
      card = PROMPT_CARDS[Math.floor(Math.random() * PROMPT_CARDS.length)];
    }
  }

  if (!next.collection.includes(card.id)) {
    next.collection.push(card.id);
  }

  return { next, card };
}
