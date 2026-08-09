import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DAY_12_TASK } from '../data/mockData';
import { motion } from 'motion/react';
import { 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Code, 
  Award, 
  Trophy, 
  TrendingUp, 
  AlertTriangle, 
  UserPlus, 
  ChevronRight, 
  Sparkles, 
  Check, 
  Github, 
  Linkedin,
  Rocket
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { state, setIsProfileModalOpen, toggleMissedYesterday } = useApp();

  const isDay12Submitted = state.submissions[12]?.isSubmitted;
  const daysCompleted = state.completedDaysCount;
  const progressPercent = Math.round((daysCompleted / 60) * 100);

  // 7-Day Mini Calendar
  const weekDays = [
    { label: 'M', day: 6, done: true },
    { label: 'T', day: 7, done: true },
    { label: 'W', day: 8, done: true },
    { label: 'T', day: 9, done: true },
    { label: 'F', day: 10, done: true },
    { label: 'S', day: 11, done: true },
    { label: 'S', day: 12, done: isDay12Submitted, today: true },
  ];

  return (
    <div className="min-h-screen text-slate-100 bg-[#090714] pb-24 md:pb-16">
      <div className="max-w-5xl mx-auto px-4 pt-6 space-y-6">

        {/* DASHBOARD HEADER */}
        <div className="flex items-center justify-between gap-3 glass-card rounded-3xl p-5 border border-white/10">
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 text-white font-extrabold text-base flex items-center justify-center shadow-lg shadow-violet-900/40 border border-violet-400/30 hover:scale-105 transition-transform"
              title="Edit Profile"
            >
              {state.student.initials}
            </button>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                Good evening, {state.student.name.split(' ')[0]} 👋
              </h1>
              <p className="text-xs text-slate-300 mt-0.5 font-medium">
                {isDay12Submitted ? "🎉 Day 12 shipped! Great work today." : "Ready to ship Day 12?"}
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <div className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
              <span>{state.currentStreak} day streak</span>
            </div>
          </div>
        </div>

        {/* EDGE CASE: MISSED YESTERDAY STATE CARD */}
        {state.missedYesterday && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-3xl bg-gradient-to-r from-amber-950/60 via-amber-900/40 to-orange-950/60 border border-amber-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-amber-200"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 mt-0.5 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Yesterday was missed.</h3>
                <p className="text-xs text-amber-200/80 mt-0.5">
                  That's okay — your challenge isn't over. One missed day won't stop your progress.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/day/12"
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-md"
              >
                Continue Today →
              </Link>
              <button
                onClick={toggleMissedYesterday}
                className="text-xs text-amber-300/80 hover:text-white px-2 py-1 underline"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        )}

        {/* EDGE CASE: INCOMPLETE PROFILE CARD */}
        {!state.student.isProfileComplete && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-3xl bg-gradient-to-r from-violet-950/80 via-purple-900/40 to-indigo-950/80 border border-violet-500/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-violet-500/20 text-violet-300 mt-0.5 shrink-0">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Complete your profile</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Add your GitHub and LinkedIn links so your progress can become part of your public portfolio.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition-colors shadow-md shrink-0"
            >
              Complete Profile
            </button>
          </motion.div>
        )}

        {/* GRID: MAIN STREAK CARD & MOMENTUM SCORE */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* MAIN STREAK CARD (PROMINENT - Takes 2 cols on md) */}
          <div className="md:col-span-2 glass-card rounded-3xl p-6 border border-violet-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-500/10 via-amber-500/5 to-transparent pointer-events-none blur-2xl" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-400 animate-bounce" /> Current Streak
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Longest: {state.longestStreak} days
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-5xl font-black text-white tracking-tight">
                  🔥 {state.currentStreak}
                </span>
                <span className="text-lg font-bold text-amber-300 uppercase tracking-widest">
                  DAY STREAK
                </span>
              </div>

              <p className="text-xs text-slate-300 mb-6 font-medium">
                {state.isFirstDay
                  ? "Every streak starts with one day. Ship Day 1 to ignite your flame!"
                  : "One more day keeps your streak alive. Stay consistent!"}
              </p>

              {/* 7-DAY MINI STREAK CALENDAR */}
              <div className="mb-6 bg-white/[0.04] p-3.5 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    This Week's Log
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold">
                    6 / 7 Days Done
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center">
                  {weekDays.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1.5">
                      <span className="text-[10px] font-bold text-slate-400">{item.label}</span>
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs transition-all ${
                          item.today
                            ? 'bg-gradient-to-tr from-violet-600 to-indigo-600 text-white ring-2 ring-violet-400/50 shadow-lg shadow-violet-900/50'
                            : item.done
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-white/5 text-slate-500 border border-white/5'
                        }`}
                      >
                        {item.done ? <Check className="w-4 h-4" /> : item.day}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/day/12"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-950/50 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
            >
              <span>{isDay12Submitted ? "Review Day 12 Submission →" : "Continue Day 12 →"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* MOMENTUM SCORE CARD */}
          <div className="glass-card rounded-3xl p-6 border border-violet-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-300 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-violet-400" /> Momentum Score
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  Level 3
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300">
                  {state.momentumScore}
                </span>
                <span className="text-slate-400 text-sm font-semibold">/ 100</span>
              </div>

              {/* Progress gauge bar */}
              <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden mb-4">
                <div
                  className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${state.momentumScore}%` }}
                />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                You're building a strong habit. Keep going for 4 more days to reach your next momentum milestone!
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Consistency Rating</span>
              <span className="text-emerald-400 font-bold">Top 8% Students</span>
            </div>
          </div>
        </div>

        {/* TODAY'S TASK CARD (DAY 12) */}
        <div className="glass-card rounded-3xl p-6 border border-violet-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-violet-600/30 text-violet-300 font-black text-xs border border-violet-500/40 uppercase tracking-wider">
                DAY 12 TASK
              </span>
              <span className="text-xs font-bold text-slate-400">
                {DAY_12_TASK.trackCategory} Track
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-violet-400" /> {DAY_12_TASK.estimatedTime}
              </span>
              <span className="flex items-center gap-1">
                <Code className="w-3.5 h-3.5 text-indigo-400" /> {DAY_12_TASK.difficulty}
              </span>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
            {DAY_12_TASK.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl">
            {DAY_12_TASK.brief}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>7 actionable criteria to build and deploy today</span>
            </div>

            <Link
              to="/day/12"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-violet-900/40 text-center transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <span>{isDay12Submitted ? "View Day 12 Submission" : "Start Day 12"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 60-DAY OVERALL PROGRESS */}
        <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-base font-bold text-white">Overall 60-Day Completion</h3>
              <p className="text-xs text-slate-400 mt-0.5">{daysCompleted} / 60 days completed</p>
            </div>
            <span className="text-2xl font-black text-violet-300">{progressPercent}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden mb-6">
            <div
              className="bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500 h-full rounded-full transition-all duration-700 shadow-md"
              style={{ width: `${Math.max(5, progressPercent)}%` }}
            />
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className={`p-2 rounded-xl border ${daysCompleted >= 15 ? 'bg-violet-600/20 border-violet-500/40 text-violet-200' : 'bg-white/5 border-white/5 text-slate-500'}`}>
              <div className="font-bold">Day 15</div>
              <div className="text-[10px] mt-0.5">{daysCompleted >= 15 ? '✓ Reached' : 'Upcoming'}</div>
            </div>

            <div className={`p-2 rounded-xl border ${daysCompleted >= 30 ? 'bg-violet-600/20 border-violet-500/40 text-violet-200' : 'bg-white/5 border-white/5 text-slate-500'}`}>
              <div className="font-bold">Day 30</div>
              <div className="text-[10px] mt-0.5">{daysCompleted >= 30 ? '✓ Reached' : 'Halfway'}</div>
            </div>

            <div className={`p-2 rounded-xl border ${daysCompleted >= 45 ? 'bg-violet-600/20 border-violet-500/40 text-violet-200' : 'bg-white/5 border-white/5 text-slate-500'}`}>
              <div className="font-bold">Day 45</div>
              <div className="text-[10px] mt-0.5">{daysCompleted >= 45 ? '✓ Reached' : 'Advanced'}</div>
            </div>

            <div className={`p-2 rounded-xl border ${daysCompleted >= 60 ? 'bg-amber-500/20 border-amber-500/40 text-amber-200' : 'bg-white/5 border-white/5 text-slate-500'}`}>
              <div className="font-bold">Day 60</div>
              <div className="text-[10px] mt-0.5">{daysCompleted >= 60 ? '🏆 Mastered' : 'Finish Line'}</div>
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS SECTION */}
        <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" /> Achievements
            </h3>
            <span className="text-xs text-slate-400 font-medium">3 Unlocked</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {state.achievements.map((ach) => (
              <div
                key={ach.id}
                className={`p-3.5 rounded-2xl border transition-all ${
                  ach.unlocked
                    ? 'bg-violet-950/40 border-violet-500/30 text-white'
                    : 'bg-white/[0.02] border-white/5 text-slate-500'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      ach.unlocked
                        ? 'bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-md'
                        : 'bg-white/5 text-slate-600'
                    }`}
                  >
                    {ach.id === 'first_7_days' && <Flame className="w-5 h-5 text-orange-400" />}
                    {ach.id === 'first_ship' && <Rocket className="w-5 h-5 text-indigo-300" />}
                    {ach.id === 'build_in_public' && <Linkedin className="w-5 h-5 text-blue-400" />}
                    {ach.id === 'warrior_30' && <Trophy className="w-5 h-5 text-amber-400" />}
                    {ach.id === 'legend_60' && <Award className="w-5 h-5 text-purple-400" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className={`text-xs font-bold ${ach.unlocked ? 'text-white' : 'text-slate-400'}`}>
                        {ach.title}
                      </h4>
                      {ach.unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Recent Activity</h3>
            <Link to="/day/12" className="text-xs text-violet-300 hover:text-white flex items-center gap-1 font-semibold">
              <span>View Day 12 Task</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {[11, 10, 9, 8].map((dayNum) => (
              <div
                key={dayNum}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 border border-emerald-500/30">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Day {dayNum} Challenge</h4>
                    <p className="text-[11px] text-slate-400">Completed & Verified</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-white/5 text-slate-300" title="GitHub Submitted">
                    <Github className="w-3.5 h-3.5" />
                  </span>
                  <span className="p-1.5 rounded-lg bg-white/5 text-slate-300" title="LinkedIn Submitted">
                    <Linkedin className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
