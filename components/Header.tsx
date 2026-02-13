
import React from 'react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery, onHome }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={onHome}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
            <i className="fas fa-gamepad text-white text-xl"></i>
          </div>
          <h1 className="heading-font text-2xl font-bold tracking-tight text-white">
            NOVA<span className="text-indigo-500">ARCADE</span>
          </h1>
        </div>

        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search for games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-full py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <button className="hover:text-white transition-colors">Discord</button>
          <button className="hover:text-white transition-colors">Request Game</button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full transition-all shadow-md">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
