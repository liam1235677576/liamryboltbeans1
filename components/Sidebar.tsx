
import React from 'react';
import { CATEGORIES } from '../constants';
import { Category } from '../types';

interface SidebarProps {
  activeCategory: Category;
  setActiveCategory: (cat: Category) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, setActiveCategory }) => {
  const getIcon = (cat: string) => {
    switch (cat) {
      case 'All': return 'fa-th-large';
      case 'Action': return 'fa-fire';
      case 'Puzzle': return 'fa-puzzle-piece';
      case 'Sports': return 'fa-basketball-ball';
      case 'Arcade': return 'fa-joystick';
      case 'Strategy': return 'fa-chess';
      case 'Favorites': return 'fa-heart';
      default: return 'fa-gamepad';
    }
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 bg-slate-900 lg:bg-transparent border-b lg:border-none border-slate-800 p-4 lg:p-0">
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
        <p className="hidden lg:block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 mt-2">
          Browse Categories
        </p>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as Category)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap lg:whitespace-normal
              ${activeCategory === cat 
                ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-600/20' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
          >
            <i className={`fas ${getIcon(cat)} w-5 text-center`}></i>
            {cat}
          </button>
        ))}
      </div>

      <div className="hidden lg:block mt-8 p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
        <h3 className="text-sm font-semibold text-white mb-2">Weekly Spotlight</h3>
        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          Check out the newly added retro classics in our Arcade section!
        </p>
        <button className="text-xs text-indigo-400 font-bold hover:underline">
          Read more &rarr;
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
