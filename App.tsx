
import React, { useState, useMemo, useEffect } from 'react';
import { GAMES } from './constants.ts';
import { Game, Category } from './types.ts';
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import GameCard from './components/GameCard.tsx';
import GameView from './components/GameView.tsx';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from local storage
  useEffect(() => {
    const saved = localStorage.getItem('nova_favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse favorites", e);
      }
    }
  }, []);

  // Save favorites to local storage
  useEffect(() => {
    localStorage.setItem('nova_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = 
        activeCategory === 'All' || 
        (activeCategory === 'Favorites' ? favorites.includes(game.id) : game.category === activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, searchQuery, favorites]);

  const toggleFavorite = (e: React.MouseEvent, gameId: string) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(gameId) ? prev.filter(id => id !== gameId) : [...prev, gameId]
    );
  };

  const resetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onHome={resetFilters} 
      />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 md:px-8">
        {selectedGame ? (
          <GameView 
            game={selectedGame} 
            onBack={() => setSelectedGame(null)} 
          />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar 
              activeCategory={activeCategory} 
              setActiveCategory={(cat) => {
                setActiveCategory(cat);
                setSelectedGame(null);
              }} 
            />

            <div className="flex-grow">
              <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white heading-font tracking-tight">
                    {activeCategory === 'Favorites' ? 'Your Favorite Games' : `${activeCategory} Games`}
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'} available
                  </p>
                </div>
                {activeCategory === 'All' && !searchQuery && (
                  <div className="bg-slate-800 p-1 rounded-xl flex">
                    <button className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold uppercase">Popular</button>
                    <button className="px-4 py-1.5 text-slate-400 hover:text-white text-xs font-bold uppercase transition-colors">Newest</button>
                  </div>
                )}
              </div>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredGames.map((game) => (
                    <GameCard
                      key={game.id}
                      game={game}
                      onSelect={setSelectedGame}
                      isFavorite={favorites.includes(game.id)}
                      toggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-slate-800/30 border border-dashed border-slate-700 rounded-3xl p-20 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                    <i className="fas fa-search-minus text-3xl text-slate-600"></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No games found</h3>
                  <p className="text-slate-500 max-w-xs">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <button 
                    onClick={resetFilters}
                    className="mt-6 text-indigo-400 font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 mt-20 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                <i className="fas fa-gamepad text-white"></i>
              </div>
              <h2 className="heading-font text-xl font-bold tracking-tight text-white">
                NOVA<span className="text-indigo-500">ARCADE</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              NovaArcade is the leading destination for unblocked browser games. Play thousands of titles for free on any device.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <i className="fab fa-discord"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><button className="hover:text-indigo-400 transition-colors">Browse Games</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Categories</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Mobile Play</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Cloud Saves</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><button className="hover:text-indigo-400 transition-colors">Help Center</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Terms of Service</button></li>
              <li><button className="hover:text-indigo-400 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest game updates directly to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-slate-800 border border-slate-700 rounded-l-lg px-4 py-2 text-sm text-slate-200 focus:outline-none w-full"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-r-lg transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; 2024 NovaArcade Games. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 uppercase font-bold tracking-widest">
            <button className="hover:text-slate-300">English</button>
            <button className="hover:text-slate-300">Status</button>
            <button className="hover:text-slate-300">Sitemap</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
