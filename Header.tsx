import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Flame, Sliders, ChevronDown, Check, RefreshCw, User, Code2 } from 'lucide-react';

export const Header: React.FC = () => {
  const { state, setIsProfileModalOpen, toggleMissedYesterday, toggleFirstDay, toggleProfileIncomplete, autoFillDemoProof, resetToDefaults } = useApp();
  const location = useLocation();
  const [isDemoMenuOpen, setIsDemoMenuOpen] = useState(false);

  const isLanding = location.pathname === '/';
  const isDashboard = location.pathname === '/dashboard';
  const isChallenge = location.pathname.startsWith('/day');

  return (
    <header className="sticky top-0 z-40 bg-[#090714]/90 backdrop-blur-md border-b border-white/[0.08] transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 p-0.5 shadow-lg shadow-violet-900/40 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0922] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-200 to-indigo-300 text-sm tracking-tight">
                AB
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-violet-300 transition-colors">
                ABTalks
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full">
                60 Days
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.08]">
          <Link
            to="/"
            className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
              isLanding ? 'bg-violet-600 text-white shadow-md shadow-violet-900/30' : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
              isDashboard ? 'bg-violet-600 text-white shadow-md shadow-violet-900/30' : 'text-slate-300 hover:text-white'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/day/12"
            className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
              isChallenge ? 'bg-violet-600 text-white shadow-md shadow-violet-900/30' : 'text-slate-300 hover:text-white'
            }`}
          >
            Day 12 Task
          </Link>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          {/* Streak Indicator Pill */}
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 hover:border-amber-500/50 transition-all cursor-pointer group"
          >
            <Flame className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform animate-pulse" />
            <span className="text-xs font-bold text-orange-200">
              {state.currentStreak} <span className="text-[11px] font-medium text-amber-300/80">days</span>
            </span>
          </Link>

          {/* Evaluator Quick Edge-Case Demo Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsDemoMenuOpen(!isDemoMenuOpen)}
              className="p-2 rounded-xl bg-violet-950/60 hover:bg-violet-900/80 border border-violet-500/30 text-violet-300 transition-colors flex items-center gap-1 text-xs font-medium"
              title="Evaluator Edge-Case Controls"
              aria-label="Evaluator Controls"
            >
              <Sliders className="w-4 h-4" />
              <span className="hidden sm:inline">Demo Controls</span>
              <ChevronDown className="w-3 h-3 text-violet-400" />
            </button>

            {isDemoMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-64 glass-card rounded-2xl p-2.5 shadow-2xl border border-violet-500/30 z-50 text-xs"
                onClick={() => setIsDemoMenuOpen(false)}
              >
                <div className="px-2 py-1.5 mb-1 text-[11px] font-bold text-violet-300 uppercase tracking-wider border-b border-white/10">
                  Evaluator Test Scenarios
                </div>
                <button
                  onClick={toggleMissedYesterday}
                  className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/10 text-slate-200 flex items-center justify-between gap-2"
                >
                  <span>Toggle "Missed Yesterday"</span>
                  {state.missedYesterday && <Check className="w-3.5 h-3.5 text-amber-400" />}
                </button>
                <button
                  onClick={toggleFirstDay}
                  className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/10 text-slate-200 flex items-center justify-between gap-2"
                >
                  <span>Toggle First Day (0 Streak)</span>
                  {state.isFirstDay && <Check className="w-3.5 h-3.5 text-violet-400" />}
                </button>
                <button
                  onClick={toggleProfileIncomplete}
                  className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/10 text-slate-200 flex items-center justify-between gap-2"
                >
                  <span>Toggle Empty Links State</span>
                  {!state.student.isProfileComplete && <Check className="w-3.5 h-3.5 text-rose-400" />}
                </button>
                <button
                  onClick={() => autoFillDemoProof(12)}
                  className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-violet-600/30 text-violet-200 flex items-center gap-2 font-medium"
                >
                  <Code2 className="w-3.5 h-3.5 text-violet-400" />
                  <span>Auto-fill Day 12 Proofs</span>
                </button>
                <button
                  onClick={resetToDefaults}
                  className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-rose-500/20 text-rose-300 flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Demo State</span>
                </button>
              </div>
            )}
          </div>

          {/* User Profile Avatar */}
          <button
            onClick={() => setIsProfileModalOpen(true)}
            className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-violet-950/50 hover:opacity-90 transition-opacity border border-violet-400/30"
            title="Profile & Settings"
            aria-label="Profile"
          >
            {state.student.initials}
          </button>
        </div>
      </div>
    </header>
  );
};
