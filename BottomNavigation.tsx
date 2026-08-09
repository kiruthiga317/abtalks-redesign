import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Home, LayoutDashboard, Target, User } from 'lucide-react';

export const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const { setIsProfileModalOpen, state } = useApp();

  const isHome = location.pathname === '/';
  const isDashboard = location.pathname === '/dashboard';
  const isChallenge = location.pathname.startsWith('/day');

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c091f]/95 backdrop-blur-xl border-t border-white/10 md:hidden pb-safe">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isHome ? 'text-violet-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div
            className={`p-1.5 rounded-xl transition-transform ${
              isHome ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : ''
            }`}
          >
            <Home className="w-5 h-5" />
          </div>
          <span className="mt-0.5">Home</span>
        </Link>

        {/* Challenge Day 12 */}
        <Link
          to="/day/12"
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isChallenge ? 'text-violet-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div
            className={`p-1.5 rounded-xl transition-transform ${
              isChallenge ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : ''
            }`}
          >
            <Target className="w-5 h-5" />
          </div>
          <span className="mt-0.5">Challenge</span>
        </Link>

        {/* Progress / Dashboard */}
        <Link
          to="/dashboard"
          className={`flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium transition-colors ${
            isDashboard ? 'text-violet-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <div
            className={`p-1.5 rounded-xl transition-transform relative ${
              isDashboard ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : ''
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            {state.currentStreak > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-[#0c091f]" />
            )}
          </div>
          <span className="mt-0.5">Progress</span>
        </Link>

        {/* Profile */}
        <button
          onClick={() => setIsProfileModalOpen(true)}
          className="flex flex-col items-center justify-center flex-1 h-full py-1 text-[11px] font-medium text-slate-400 hover:text-slate-200 transition-colors"
        >
          <div className="p-1.5 rounded-xl hover:bg-white/5">
            <User className="w-5 h-5" />
          </div>
          <span className="mt-0.5">Profile</span>
        </button>
      </div>
    </nav>
  );
};
