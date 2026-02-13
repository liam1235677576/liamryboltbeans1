
import React, { useState } from 'react';
import { Game } from '../types';

interface GameViewProps {
  game: Game;
  onBack: () => void;
}

const GameView: React.FC<GameViewProps> = ({ game, onBack }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe) {
      if (!document.fullscreenElement) {
        iframe.requestFullscreen().catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message}`);
        });
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span className="text-sm font-medium">Back to Games</span>
        </button>

        <div className="flex gap-2">
          <button 
            onClick={toggleFullscreen}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
          <button 
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <i className="fas fa-share-alt mr-2"></i>
            Share
          </button>
        </div>
      </div>

      <div className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 ring-1 ring-slate-800">
        <iframe
          id="game-iframe"
          src={game.iframeUrl}
          className="w-full h-full border-none"
          title={game.title}
          allow="fullscreen; autoplay"
        />
      </div>

      <div className="bg-slate-800/50 p-6 md:p-8 rounded-3xl border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{game.category}</span>
            <h2 className="text-3xl font-bold text-white mt-1">{game.title}</h2>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Played</span>
              <span className="text-lg font-bold text-slate-200">12.5k</span>
            </div>
            <div className="flex flex-col border-l border-slate-700 pl-4">
              <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Rating</span>
              <span className="text-lg font-bold text-indigo-400">4.8/5</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-white font-semibold">About the Game</h3>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            {game.description} This unblocked version of {game.title} is optimized for browser play. 
            Enjoy seamless performance and responsive controls without any downloads.
            Experience classic gameplay mechanics reimagined for the modern web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameView;
