
export interface Game {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  iframeUrl: string;
  description: string;
}

export type Category = 'All' | 'Action' | 'Puzzle' | 'Sports' | 'Arcade' | 'Strategy' | 'Favorites';
