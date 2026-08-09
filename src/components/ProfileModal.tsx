import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { TRACKS } from '../data/mockData';
import { X, Github, Linkedin, User, Building, BookOpen, Sliders, CheckCircle2, RotateCcw } from 'lucide-react';

export const ProfileModal: React.FC = () => {
  const { isProfileModalOpen, setIsProfileModalOpen, state, updateStudent, toggleMissedYesterday, toggleFirstDay, autoFillDemoProof, resetToDefaults } = useApp();

  const [formData, setFormData] = useState({
    name: state.student.name,
    college: state.student.college,
    track: state.student.track,
    githubUsername: state.student.githubUsername,
    linkedinUrl: state.student.linkedinUrl,
    bio: state.student.bio,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudent(formData);
    setIsProfileModalOpen(false);
  };

  return (
    <AnimatePresence>
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsProfileModalOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-5 border border-violet-500/30 text-white shadow-2xl z-10 no-scrollbar"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white font-extrabold text-base flex items-center justify-center shadow-lg shadow-violet-900/40 border border-violet-400/30">
                  {state.student.initials}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white leading-tight">{state.student.name}</h2>
                  <p className="text-xs text-violet-300">{state.student.track} • Day {state.currentDay}</p>
                </div>
              </div>
              <button
                onClick={() => setIsProfileModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Profile Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-violet-400" /> Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="Arjun Kumar"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-violet-400" /> College / Institution
                </label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="e.g. DTU / NSUT / IIT Delhi"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-violet-400" /> Coding Track
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#140f33] border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
                >
                  {TRACKS.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} ({t.difficulty})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-violet-400" /> GitHub Username
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 text-xs font-mono">github.com/</span>
                  <input
                    type="text"
                    value={formData.githubUsername}
                    onChange={(e) => setFormData({ ...formData, githubUsername: e.target.value })}
                    className="w-full pl-24 pr-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors font-mono"
                    placeholder="username"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-violet-400" /> LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors text-xs font-mono"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-violet-900/40 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" /> Save Profile Details
                </button>
              </div>
            </form>

            {/* Evaluator Edge-Case Controls Box */}
            <div className="mt-6 pt-5 border-t border-white/10 bg-violet-950/40 p-4 rounded-2xl border border-violet-500/20">
              <div className="flex items-center gap-2 text-xs font-bold text-violet-300 uppercase tracking-wider mb-3">
                <Sliders className="w-4 h-4" /> Evaluator Quick Controls
              </div>
              <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
                Test how the platform handles various student states and edge-cases seamlessly:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={toggleMissedYesterday}
                  className={`px-3 py-2 rounded-xl text-xs font-medium border transition-colors text-left flex items-center justify-between ${
                    state.missedYesterday
                      ? 'bg-amber-500/20 border-amber-500/40 text-amber-200'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span>Missed Yesterday</span>
                  <span className="text-[10px] uppercase font-bold">{state.missedYesterday ? 'ON' : 'OFF'}</span>
                </button>

                <button
                  type="button"
                  onClick={toggleFirstDay}
                  className={`px-3 py-2 rounded-xl text-xs font-medium border transition-colors text-left flex items-center justify-between ${
                    state.isFirstDay
                      ? 'bg-violet-500/20 border-violet-500/40 text-violet-200'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span>First Day (0 Streak)</span>
                  <span className="text-[10px] uppercase font-bold">{state.isFirstDay ? 'ON' : 'OFF'}</span>
                </button>
              </div>

              <div className="mt-2.5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => autoFillDemoProof(12)}
                  className="flex-1 py-2 px-3 rounded-xl bg-violet-600/30 hover:bg-violet-600/40 text-violet-200 border border-violet-500/30 text-xs font-semibold text-center transition-colors"
                >
                  Auto-fill Day 12 Links
                </button>
                <button
                  type="button"
                  onClick={resetToDefaults}
                  className="p-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition-colors"
                  title="Reset Demo State"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
