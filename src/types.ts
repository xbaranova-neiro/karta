export type PromptCard = {
  id: number;
  emoji: string;
  title: string;
  prompt: string;
  preview?: string;
  special?: boolean;
};

export type GameData = {
  lastDate: string | null;
  streak: number;
  collection: number[];
  specialUnlocked: boolean;
};
