import React from 'react';
import { Link } from 'react-router-dom';
import { TRACKS } from '../data/mockData';
import { motion } from 'motion/react';
import { 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  Layout, 
  Layers, 
  Server, 
  BarChart2, 
  Github, 
  Linkedin, 
  Globe, 
  Users, 
  FolderCheck, 
  Zap, 
  Award 
} from 'lucide-react';

const TRACK_ICONS: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-violet-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
  Layers: <Layers className="w-6 h-6 text-indigo-400" />,
  Server: <Server className="w-6 h-6 text-emerald-400" />,
  BarChart2: <BarChart2 className="w-6 h-6 text-amber-400" />,
};

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-100 bg-[#090714] pb-24 md:pb-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-violet-900/20 via-purple-900/10 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 pt-6 md:pt-12">
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 border border-violet-500/30 text-xs font-bold uppercase tracking-wider text-violet-300 shadow-lg shadow-violet-950/30 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>60 DAYS • BUILD IN PUBLIC</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] mb-5"
          >
            Build. Ship. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">
              Show Up.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8"
          >
            Turn 60 days of coding into 60 days of proof. Build real projects, stay consistent, and make your work visible to developers and recruiters.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10"
          >
            <Link
              to="/dashboard"
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-violet-900/40 hover:shadow-violet-900/60 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start My 60-Day Challenge</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="#how-it-works"
              className="px-6 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-base transition-colors text-center"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Microcopy */}
          <p className="text-xs text-slate-400 mb-10 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
            <span>No experience? Start where you are. Designed for Indian college students.</span>
          </p>

          {/* 60-Day Streak Progress Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full glass-card rounded-3xl p-5 border border-violet-500/20 mb-16 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-300 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-400" /> 60-Day Public Journey
              </span>
              <span className="text-xs font-medium text-slate-400">Day 12 Active 🔥</span>
            </div>

            {/* Visual Timeline Nodes */}
            <div className="grid grid-cols-4 gap-2 relative">
              {/* Connector line behind */}
              <div className="absolute top-1/2 left-6 right-6 h-1 bg-gradient-to-r from-emerald-500 via-violet-500 to-slate-800 -translate-y-1/2 -z-0" />

              {/* Day 01 */}
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center shadow-lg shadow-emerald-950/50">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-emerald-400">Day 01</span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">First Habit</span>
              </div>

              {/* Day 12 */}
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-xl shadow-violet-900/80 ring-4 ring-violet-500/30 animate-pulse">
                  12
                </div>
                <span className="text-[11px] font-bold text-violet-300">Day 12</span>
                <span className="text-[10px] text-violet-400 font-semibold hidden sm:inline">Today's Task</span>
              </div>

              {/* Day 30 */}
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className="w-9 h-9 rounded-full bg-[#181238] border border-violet-500/40 text-slate-300 font-bold text-xs flex items-center justify-center">
                  30
                </div>
                <span className="text-[11px] font-semibold text-slate-400">Day 30</span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">Consistent</span>
              </div>

              {/* Day 60 */}
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className="w-9 h-9 rounded-full bg-[#181238] border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-center">
                  60
                </div>
                <span className="text-[11px] font-semibold text-amber-300/80">Day 60</span>
                <span className="text-[10px] text-amber-400/80 hidden sm:inline">Proof of Work</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* TRUST & METRICS SECTION */}
        <section className="mb-20">
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-400">
              Built for college students who want more than certificates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            <div className="glass-card rounded-2xl p-4 text-center border border-white/10">
              <div className="flex justify-center mb-1 text-violet-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-white">2,500+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Active Students</div>
            </div>

            <div className="glass-card rounded-2xl p-4 text-center border border-white/10">
              <div className="flex justify-center mb-1 text-indigo-400">
                <FolderCheck className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-white">48,000+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Builds Shipped</div>
            </div>

            <div className="glass-card rounded-2xl p-4 text-center border border-white/10">
              <div className="flex justify-center mb-1 text-purple-400">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-white">60 Days</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Structured Path</div>
            </div>

            <div className="glass-card rounded-2xl p-4 text-center border border-white/10">
              <div className="flex justify-center mb-1 text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-white">1 Goal</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Consistency & Proof</div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              How ABTalks Works
            </h2>
            <p className="text-sm text-slate-300">
              Three simple steps to transform your coding routine into a verified portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Step 1 */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden group hover:border-violet-500/40 transition-colors">
              <div className="text-4xl font-black text-violet-500/20 mb-3 group-hover:text-violet-500/40 transition-colors">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pick Your Track</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Choose what you want to build and learn — Frontend, Full Stack, AI/ML, Backend, or Data Science.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden group hover:border-violet-500/40 transition-colors">
              <div className="text-4xl font-black text-indigo-500/20 mb-3 group-hover:text-indigo-500/40 transition-colors">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Build Every Day</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete one focused daily challenge with realistic briefs, clear specs, and estimated completion times.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden group hover:border-violet-500/40 transition-colors">
              <div className="text-4xl font-black text-purple-500/20 mb-3 group-hover:text-purple-500/40 transition-colors">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Prove Your Progress</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Submit your GitHub commit, LinkedIn post, and live deployment URL to lock in your daily streak.
              </p>
            </div>
          </div>
        </section>

        {/* TRACKS SECTION */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400">Targeted Learning</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Choose Your 60-Day Track
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Each track is curated with 60 practical, industry-aligned daily projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TRACKS.map((track) => (
              <div
                key={track.id}
                className="glass-card rounded-3xl p-5 border border-white/10 flex flex-col justify-between hover:border-violet-500/40 transition-all group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {TRACK_ICONS[track.iconName] || <Code2 className="w-6 h-6 text-violet-400" />}
                    </div>
                    {track.popular && (
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-violet-300 transition-colors">
                    {track.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {track.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>60 days • {track.difficulty}</span>
                  <span className="font-semibold text-violet-300">{track.studentsCount} students</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY 60 DAYS SECTION */}
        <section className="mb-20 glass-card rounded-3xl p-6 sm:p-8 border border-violet-500/30 relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-400">Habit Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-3">
              60 days is long enough to build a habit — and short enough to start today.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Short tutorials leave gaps. 60 days of daily shipping rewires how you learn and present your skills.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <div className="text-xs font-bold text-violet-400 mb-1">Day 1</div>
              <div className="text-xs font-semibold text-white">Start</div>
              <div className="text-[10px] text-slate-400 mt-1">Commitment</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <div className="text-xs font-bold text-violet-400 mb-1">Day 7</div>
              <div className="text-xs font-semibold text-white">First Habit</div>
              <div className="text-[10px] text-slate-400 mt-1">Streak formed</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <div className="text-xs font-bold text-violet-400 mb-1">Day 15</div>
              <div className="text-xs font-semibold text-white">First Real App</div>
              <div className="text-[10px] text-slate-400 mt-1">Deployed live</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <div className="text-xs font-bold text-violet-400 mb-1">Day 30</div>
              <div className="text-xs font-semibold text-white">Consistency</div>
              <div className="text-[10px] text-slate-400 mt-1">Habit unlocked</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <div className="text-xs font-bold text-violet-400 mb-1">Day 45</div>
              <div className="text-xs font-semibold text-white">Portfolio</div>
              <div className="text-[10px] text-slate-400 mt-1">Taking shape</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-violet-600/30 to-indigo-600/30 border border-violet-500/50 text-center">
              <div className="text-xs font-bold text-amber-300 mb-1">Day 60</div>
              <div className="text-xs font-bold text-white">Proof of Work</div>
              <div className="text-[10px] text-amber-200/80 mt-1">Recruiter ready</div>
            </div>
          </div>
        </section>

        {/* PROOF OF WORK SYSTEM DEMO */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400">The Core Advantage</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 mb-4">
                Your progress isn't just a number. Every day becomes something you can show.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Most students build in silence and wait until graduation. ABTalks turns your daily learning into public artifacts that build your reputation in real time.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">GitHub Repository & Commit</h4>
                    <p className="text-xs text-slate-400">Public code verifying your actual implementation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">LinkedIn Proof of Work</h4>
                    <p className="text-xs text-slate-400">Public post documenting what you learned and built today.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Live Deployment URL</h4>
                    <p className="text-xs text-slate-400">Accessible web link anyone can test on mobile or desktop.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Sample Card */}
            <div className="glass-card rounded-3xl p-6 border border-violet-500/30 shadow-2xl relative">
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400" /> TODAY'S PROOF • DAY 12
                </span>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  Verified
                </span>
              </div>

              <div className="space-y-3 mb-5">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-300" />
                    <span className="text-xs font-medium text-slate-200">GitHub commit</span>
                  </div>
                  <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Linked
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-slate-300" />
                    <span className="text-xs font-medium text-slate-200">LinkedIn post</span>
                  </div>
                  <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Published
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-slate-300" />
                    <span className="text-xs font-medium text-slate-200">Live deployment</span>
                  </div>
                  <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Deployed
                  </span>
                </div>
              </div>

              <Link
                to="/day/12"
                className="w-full py-2.5 rounded-xl bg-violet-600/30 hover:bg-violet-600/40 text-violet-200 text-xs font-semibold text-center block transition-colors border border-violet-500/30"
              >
                View Live Day 12 Challenge →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA & FOOTER */}
        <section className="text-center py-12 px-6 glass-card rounded-3xl border border-violet-500/40 relative overflow-hidden mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Your next 60 days can look different.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
            Don't wait to feel ready. Start building today and turn consistency into your biggest advantage.
          </p>

          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-base shadow-2xl shadow-violet-900/50 transition-all hover:scale-105"
          >
            <span>Start the Challenge</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-white text-sm">ABTalks</span>
            <p className="text-[11px] text-slate-400 mt-0.5">Build in public. Stay consistent.</p>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">About</Link>
            <Link to="/dashboard" className="hover:text-white transition-colors">Challenge</Link>
            <Link to="/day/12" className="hover:text-white transition-colors">Day 12</Link>
            <a href="#how-it-works" className="hover:text-white transition-colors">Community</a>
          </div>
        </footer>
      </div>
    </div>
  );
};
