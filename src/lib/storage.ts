import type { GameData } from '../types';

const KEYS = {
  lastDate: 'aicard_lastDate',
  streak: 'aicard_streak',
  collection: 'aicard_collection',
  specialUnlocked: 'aicard_specialUnlocked',
} as const;

export function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

export function getYesterdayDateString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

export function loadGameData(): GameData {
  try {
    return {
      lastDate: localStorage.getItem(KEYS.lastDate),
      streak: parseInt(localStorage.getItem(KEYS.streak) || '0', 10) || 0,
      collection: JSON.parse(localStorage.getItem(KEYS.collection) || '[]') || [],
      specialUnlocked: localStorage.getItem(KEYS.specialUnlocked) === 'true',
    };
  } catch {
    return { lastDate: null, streak: 0, collection: [], specialUnlocked: false };
  }
}

export function saveGameData(data: GameData): void {
  try {
    if (data.lastDate) localStorage.setItem(KEYS.lastDate, data.lastDate);
    else localStorage.removeItem(KEYS.lastDate);
    localStorage.setItem(KEYS.streak, String(data.streak));
    localStorage.setItem(KEYS.collection, JSON.stringify(data.collection));
    localStorage.setItem(KEYS.specialUnlocked, String(data.specialUnlocked));
  } catch (e) {
    console.warn('Не удалось сохранить данные в localStorage:', e);
  }
}

export function canPlayToday(data: GameData, today: string): boolean {
  return data.lastDate !== today;
}
