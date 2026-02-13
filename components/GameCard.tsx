
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onSelect: (game: Game) => void;
  isFavorite: boolean;
  toggleFavorite: (e: React.MouseEvent, gameId: string) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onSelect, isFavorite, toggleFavorite }) => {
  return (
    <div 
      className="group relative bg-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all duration-300"
      onClick={() => onSelect(game)}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
        
        <button 
          onClick={(e) => toggleFavorite(e, game.id)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all
            ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
        >
          <i className={`${isFavorite ? 'fas' : 'far'} fa-heart text-sm`}></i>
        </button>

        <div className="absolute bottom-3 left-3 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
          {game.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-bold text-sm mb-1 group-hover:text-indigo-400 transition-colors">
          {game.title}
        </h3>
        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
          {game.description}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
