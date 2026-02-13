
import { Game } from './types';

export const GAMES: Game[] = [
  {
    id: '1',
    title: 'Retro Ping Pong',
    category: 'Arcade',
    thumbnail: 'https://picsum.photos/seed/pong/400/300',
    iframeUrl: 'https://www.retrogames.cc/embed/41727-pong-world.html',
    description: 'A classic table tennis experience with retro aesthetics.'
  },
  {
    id: '2',
    title: 'Space Invaders',
    category: 'Action',
    thumbnail: 'https://picsum.photos/seed/space/400/300',
    iframeUrl: 'https://www.retrogames.cc/embed/10101-space-invaders.html',
    description: 'Defend Earth from waves of descending alien invaders.'
  },
  {
    id: '3',
    title: '2048',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/seed/2048/400/300',
    iframeUrl: 'https://play2048.co/',
    description: 'Slide tiles to merge them and reach the 2048 tile.'
  },
  {
    id: '4',
    title: 'Snake Retro',
    category: 'Arcade',
    thumbnail: 'https://picsum.photos/seed/snake/400/300',
    iframeUrl: 'https://www.google.com/logos/2010/pacman10-i.html',
    description: 'The iconic game of Snake. Eat and grow without hitting the walls.'
  },
  {
    id: '5',
    title: 'Tetris Classic',
    category: 'Puzzle',
    thumbnail: 'https://picsum.photos/seed/tetris/400/300',
    iframeUrl: 'https://tetris.com/play-tetris',
    description: 'Stack geometric blocks to clear lines in this legendary puzzle game.'
  },
  {
    id: '6',
    title: 'Drift Hunters',
    category: 'Sports',
    thumbnail: 'https://picsum.photos/seed/drift/400/300',
    iframeUrl: 'https://v6p9d9t4.ssl.hwcdn.net/html/1453215/index.html',
    description: 'The ultimate car drifting simulator with realistic physics.'
  },
  {
    id: '7',
    title: 'Chrome Dino',
    category: 'Arcade',
    thumbnail: 'https://picsum.photos/seed/dino/400/300',
    iframeUrl: 'https://chromedino.com/',
    description: 'The famous offline T-Rex runner game.'
  },
  {
    id: '8',
    title: 'Checkers',
    category: 'Strategy',
    thumbnail: 'https://picsum.photos/seed/checkers/400/300',
    iframeUrl: 'https://www.mathsisfun.com/games/checkers-2.html',
    description: 'A classic game of strategy and board control.'
  }
];

export const CATEGORIES = ['All', 'Action', 'Puzzle', 'Sports', 'Arcade', 'Strategy', 'Favorites'] as const;
