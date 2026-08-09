import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DAY_12_TASK } from '../data/mockData';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Flame, 
  CheckCircle2, 
  Clock, 
  Code, 
  ChevronDown, 
  ChevronUp, 
  Github, 
  Linkedin, 
  Globe, 
  Sparkles, 
  Wand2, 
  Check, 
  X,
  Share2,
  ExternalLink
} from 'lucide-react';

export const ChallengeDayPage: React.FC = () => {
  const { dayId } = useParams<{ dayId: string }>();
  const navigate = useNavigate();
  const { state, toggleRequirement, updateSubmission, submitDay, autoFillDemoProof } = useApp();

  const currentDayNum = parseInt(dayId || '12', 10);
  const task = DAY_12_TASK; // Focus on Day 12

  const [isCriteriaOpen, setIsCriteriaOpen] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Requirements state for Day 12
  const dayReqs = state.dayRequirements[currentDayNum] || {
    req_1: true,
    req_2: true,
    req_3: true,
    req_4: true,
    req_5: false,
    req_6: false,
    req_7: false,
  };

  const completedReqsCount = task.requirements.filter((r) => dayReqs[r.id]).length;
  const totalReqsCount = task.requirements.length;
  const reqsPercent = Math.round((completedReqsCount / totalReqsCount) * 100);

  // Submission state for Day 12
  const currentSub = state.submissions[currentDayNum] || {
    dayNumber: currentDayNum,
    githubUrl: '',
    linkedinUrl: '',
    deploymentUrl: '',
    isSubmitted: false,
  };

  const [githubUrl, setGithubUrl] = useState(currentSub.githubUrl);
  const [linkedinUrl, setLinkedinUrl] = useState(currentSub.linkedinUrl);
  const [deploymentUrl, setDeploymentUrl] = useState(currentSub.deploymentUrl);

  const isGithubFilled = githubUrl.trim().length > 10;
  const isLinkedinFilled = linkedinUrl.trim().length > 10;
  const isDeploymentFilled = deploymentUrl.trim().length > 8;
  const isSubmissionValid = isGithubFilled && isLinkedinFilled && isDeploymentFilled;

  const handleRequirementToggle = (reqId: string) => {
    toggleRequirement(currentDayNum, reqId);
  };

  const handleGithubChange = (val: string) => {
    setGithubUrl(val);
    updateSubmission(currentDayNum, { githubUrl: val });
  };

  const handleLinkedinChange = (val: string) => {
    setLinkedinUrl(val);
    updateSubmission(currentDayNum, { linkedinUrl: val });
  };

  const handleDeploymentChange = (val: string) => {
    setDeploymentUrl(val);
    updateSubmission(currentDayNum, { deploymentUrl: val });
  };

  const handleAutoFillClick = () => {
    autoFillDemoProof(currentDayNum);
    setGithubUrl('https://github.com/arjunkumar-dev/saas-pricing-day12');
    setLinkedinUrl('https://linkedin.com/posts/arjunkumar-day12-pricing-ship');
    setDeploymentUrl('https://abtalks-pricing-demo.vercel.app');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSubmissionValid) return;

    // Trigger celebration confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8b5cf6', '#a855f7', '#10b981', '#f59e0b'],
    });

    submitDay(currentDayNum);
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen text-slate-100 bg-[#090714] pb-28 md:pb-16">
      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-6">

        {/* TOP NAVIGATION HEADER */}
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-semibold text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-violet-300">Day {currentDayNum} of 60</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{state.completedDaysCount} completed</span>
          </div>

          <div className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span>{state.currentStreak}d streak</span>
          </div>
        </div>

        {/* DAY HERO SECTION */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-violet-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-violet-900/40">
              DAY {currentDayNum}
            </span>
            {currentSub.isSubmitted && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Shipped
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2 leading-tight">
            {task.title}
          </h1>

          <p className="text-sm sm:text-base text-violet-200/90 font-medium mb-6">
            "{task.subtitle}"
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-4 border-t border-white/10">
            <span className="px-3 py-1 rounded-xl bg-white/[0.06] border border-white/10 font-medium">
              💻 {task.trackCategory}
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/[0.06] border border-white/10 font-medium">
              ⭐ {task.difficulty}
            </span>
            <span className="px-3 py-1 rounded-xl bg-white/[0.06] border border-white/10 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-violet-400" /> ~{task.estimatedTime}
            </span>
          </div>
        </div>

        {/* CHALLENGE BRIEF SECTION */}
        <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-xl">
          <h2 className="text-sm font-bold uppercase tracking-wider text-violet-300 mb-2">
            What you're building
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {task.brief}
          </p>
        </div>

        {/* REQUIREMENTS CHECKLIST */}
        <div className="glass-card rounded-3xl p-6 border border-violet-500/20 shadow-xl">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div>
              <h2 className="text-base font-bold text-white">Task Requirements</h2>
              <p className="text-xs text-slate-400 mt-0.5">Check off requirements as you build</p>
            </div>
            <span className="text-xs font-bold text-violet-300 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
              {completedReqsCount} / {totalReqsCount} complete
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden mb-5">
            <div
              className="bg-gradient-to-r from-violet-600 to-emerald-400 h-full rounded-full transition-all duration-300"
              style={{ width: `${reqsPercent}%` }}
            />
          </div>

          {/* Interactive Checkbox Items */}
          <div className="space-y-2.5">
            {task.requirements.map((req) => {
              const isChecked = Boolean(dayReqs[req.id]);
              return (
                <button
                  key={req.id}
                  type="button"
                  onClick={() => handleRequirementToggle(req.id)}
                  className={`w-full p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-violet-950/30 border-violet-500/40 text-white'
                      : 'bg-white/[0.03] border-white/5 text-slate-300 hover:bg-white/[0.06]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                        : 'border-slate-500 bg-white/5'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className={`text-xs font-medium ${isChecked ? 'line-through text-slate-300' : 'text-slate-200'}`}>
                    {req.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACCEPTANCE CRITERIA COLLAPSIBLE SECTION */}
        <div className="glass-card rounded-3xl border border-white/10 shadow-xl overflow-hidden">
          <button
            onClick={() => setIsCriteriaOpen(!isCriteriaOpen)}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold text-white">Acceptance Criteria (Check before submitting)</span>
            </div>
            {isCriteriaOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>

          {isCriteriaOpen && (
            <div className="px-5 pb-5 pt-1 border-t border-white/5 space-y-2 text-xs text-slate-300">
              {task.acceptanceCriteria.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PROOF OF WORK SUBMISSION FORM */}
        <div id="submission-form" className="glass-card rounded-3xl p-6 sm:p-8 border border-violet-500/40 shadow-2xl space-y-6 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-400" /> Show your proof of work
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Your submission becomes part of your public 60-day portfolio.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAutoFillClick}
              className="px-3.5 py-2 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <Wand2 className="w-3.5 h-3.5 text-violet-400" /> Auto-fill Demo Links
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. GITHUB PROOF */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white flex items-center gap-2">
                  <Github className="w-4 h-4 text-violet-400" /> 1. GitHub Repository / Commit
                </label>
                <span className={`text-[11px] font-bold ${isGithubFilled ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {isGithubFilled ? '✓ Repository linked' : 'Not submitted'}
                </span>
              </div>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => handleGithubChange(e.target.value)}
                placeholder="https://github.com/username/saas-pricing-day12"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors font-mono"
              />
            </div>

            {/* 2. LINKEDIN PROOF */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-400" /> 2. LinkedIn Post URL
                </label>
                <span className={`text-[11px] font-bold ${isLinkedinFilled ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {isLinkedinFilled ? '✓ Post linked' : 'Not submitted'}
                </span>
              </div>
              <input
                type="url"
                value={linkedinUrl}
                onChange={(e) => handleLinkedinChange(e.target.value)}
                placeholder="https://linkedin.com/posts/username_day12-ship"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors font-mono"
              />
            </div>

            {/* 3. LIVE DEPLOYMENT PROOF */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" /> 3. Live Deployment URL
                </label>
                <span className={`text-[11px] font-bold ${isDeploymentFilled ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {isDeploymentFilled ? '✓ Live URL linked' : 'Not submitted'}
                </span>
              </div>
              <input
                type="url"
                value={deploymentUrl}
                onChange={(e) => handleDeploymentChange(e.target.value)}
                placeholder="https://your-project.vercel.app"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors font-mono"
              />
            </div>

            {/* SUBMISSION VALIDATION BANNER */}
            {!isSubmissionValid ? (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-base">👀</span>
                  <span>Almost there — add your GitHub, LinkedIn and live deployment links to submit Day 12.</span>
                </div>
              </div>
            ) : (
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All 3 proof links provided! Ready to lock in Day 12.</span>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={!isSubmissionValid}
              className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-2xl transition-all ${
                isSubmissionValid
                  ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-violet-900/60 hover:scale-[1.01] cursor-pointer'
                  : 'bg-white/10 text-slate-500 border border-white/5 cursor-not-allowed opacity-60'
              }`}
            >
              <span>{currentSub.isSubmitted ? "Update Day 12 Submission ✓" : "Submit Day 12 ✓"}</span>
            </button>
          </form>
        </div>

      </div>

      {/* SUCCESS CELEBRATION MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setShowSuccessModal(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md glass-card rounded-3xl p-6 border border-violet-500/40 text-center shadow-2xl z-10"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-violet-600 to-emerald-400 text-white font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-violet-900/50">
                🎉
              </div>

              <h2 className="text-2xl font-black text-white mb-1">
                Day {currentDayNum} Submitted!
              </h2>

              <p className="text-xs text-slate-300 mb-6">
                Your proof of work has been recorded. Your 12-day streak is burning bright! 🔥
              </p>

              <div className="space-y-2 mb-6 text-left bg-white/[0.04] p-4 rounded-2xl border border-white/10 text-xs">
                <div className="flex items-center justify-between text-slate-200">
                  <span className="flex items-center gap-1.5"><Github className="w-3.5 h-3.5 text-violet-400" /> GitHub Repo</span>
                  <span className="text-emerald-400 font-bold">✓ Verified</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span className="flex items-center gap-1.5"><Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn Post</span>
                  <span className="text-emerald-400 font-bold">✓ Verified</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-emerald-400" /> Live Deployment</span>
                  <span className="text-emerald-400 font-bold">✓ Verified</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  navigate('/dashboard');
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-violet-900/40 transition-all"
              >
                Back to Dashboard →
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
