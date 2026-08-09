import { AppState, DayTask, TrackInfo, Achievement } from '../types';

export const TRACKS: TrackInfo[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Build interfaces, components and real-world web experiences.',
    difficulty: 'Beginner friendly',
    durationDays: 60,
    studentsCount: 1120,
    iconName: 'Layout',
    gradient: 'from-violet-600 to-indigo-600',
    popular: true,
  },
  {
    id: 'aiml',
    name: 'AI / ML',
    description: 'Master prompt engineering, model tuning, LLMs, and intelligent apps.',
    difficulty: 'Intermediate',
    durationDays: 60,
    studentsCount: 680,
    iconName: 'Sparkles',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: 'fullstack',
    name: 'Full Stack',
    description: 'Connect React frontends with Node/Express backends and databases.',
    difficulty: 'Intermediate',
    durationDays: 60,
    studentsCount: 940,
    iconName: 'Layers',
    gradient: 'from-blue-600 to-violet-600',
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Design robust APIs, microservices, system architecture, and SQL/NoSQL databases.',
    difficulty: 'Intermediate',
    durationDays: 60,
    studentsCount: 520,
    iconName: 'Server',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'datascience',
    name: 'Data Science',
    description: 'Analyze real datasets, visualize insights, build predictive pipelines.',
    difficulty: 'Beginner friendly',
    durationDays: 60,
    studentsCount: 390,
    iconName: 'BarChart2',
    gradient: 'from-amber-600 to-orange-600',
  },
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_7_days',
    title: 'First 7 Days',
    description: 'Completed your first 7 consecutive days.',
    icon: 'Flame',
    unlocked: true,
    unlockedAt: '7 days ago',
  },
  {
    id: 'first_ship',
    title: 'First Ship',
    description: 'Submitted your first deployed project.',
    icon: 'Rocket',
    unlocked: true,
    unlockedAt: '11 days ago',
  },
  {
    id: 'build_in_public',
    title: 'Build in Public',
    description: 'Shared your work on LinkedIn.',
    icon: 'Share2',
    unlocked: true,
    unlockedAt: '10 days ago',
  },
  {
    id: 'warrior_30',
    title: '30 Day Warrior',
    description: 'Complete 30 consecutive days.',
    icon: 'Trophy',
    unlocked: false,
  },
  {
    id: 'legend_60',
    title: '60 Day Legend',
    description: 'Cross the finish line and ship 60 projects.',
    icon: 'Crown',
    unlocked: false,
  },
];

export const DAY_12_TASK: DayTask = {
  dayNumber: 12,
  title: 'Build a Responsive Pricing Page',
  subtitle: 'Turn a pricing idea into a polished, mobile-first interface.',
  brief: 'Create a responsive pricing page for a fictional SaaS product. The page should clearly communicate the difference between plans and guide users toward the recommended plan.',
  estimatedTime: '90 min',
  trackCategory: 'Frontend',
  difficulty: 'Intermediate',
  requirements: [
    { id: 'req_1', text: 'Create 3 pricing tiers', completed: true },
    { id: 'req_2', text: 'Highlight the recommended plan', completed: true },
    { id: 'req_3', text: 'Add feature comparison', completed: true },
    { id: 'req_4', text: 'Add clear CTA buttons', completed: true },
    { id: 'req_5', text: 'Make the layout responsive', completed: false },
    { id: 'req_6', text: 'Add hover/focus states', completed: false },
    { id: 'req_7', text: 'Deploy the project', completed: false },
  ],
  acceptanceCriteria: [
    'Works on mobile screens (down to 390px without overflow)',
    'No broken links or empty button targets',
    'Primary CTA on recommended plan is visually prominent',
    'Layout adapts gracefully to tablet & desktop screens',
    'Project is deployed with an accessible URL',
    'GitHub repository is public and includes a clean README'
  ]
};

export const MOCK_SCHEDULE_TASKS: Record<number, Partial<DayTask>> = {
  1: { dayNumber: 1, title: 'Personal Portfolio Landing Page', trackCategory: 'Frontend', difficulty: 'Beginner' },
  2: { dayNumber: 2, title: 'Interactive Link Tree Page', trackCategory: 'Frontend', difficulty: 'Beginner' },
  3: { dayNumber: 3, title: 'CSS Glassmorphism Card System', trackCategory: 'Frontend', difficulty: 'Beginner' },
  4: { dayNumber: 4, title: 'Dynamic Weather Dashboard Widget', trackCategory: 'Frontend', difficulty: 'Beginner' },
  5: { dayNumber: 5, title: 'Pomodoro Focus Timer App', trackCategory: 'Frontend', difficulty: 'Beginner' },
  6: { dayNumber: 6, title: 'Interactive Markdown Note Editor', trackCategory: 'Frontend', difficulty: 'Intermediate' },
  7: { dayNumber: 7, title: 'Subtle Micro-Interaction Navigation', trackCategory: 'Frontend', difficulty: 'Intermediate' },
  8: { dayNumber: 8, title: 'Custom Accessible Form Validation', trackCategory: 'Frontend', difficulty: 'Intermediate' },
  9: { dayNumber: 9, title: 'Dark Mode Switcher & Theme Engine', trackCategory: 'Frontend', difficulty: 'Intermediate' },
  10: { dayNumber: 10, title: 'REST API Data Fetcher & Search', trackCategory: 'Frontend', difficulty: 'Intermediate' },
  11: { dayNumber: 11, title: 'Kanban Task Drag-and-Drop Board', trackCategory: 'Frontend', difficulty: 'Intermediate' },
  12: DAY_12_TASK,
};

export const DEFAULT_APP_STATE: AppState = {
  student: {
    name: 'Arjun Kumar',
    initials: 'AK',
    college: 'Delhi Technological University (DTU)',
    track: 'Frontend Development',
    githubUsername: 'arjunkumar-dev',
    linkedinUrl: 'https://linkedin.com/in/arjunkumar-dev',
    bio: 'Passionate frontend developer crafting mobile-first web applications.',
    isProfileComplete: true,
  },
  currentDay: 12,
  currentStreak: 11,
  longestStreak: 11,
  completedDaysCount: 11,
  momentumScore: 82,
  missedYesterday: false,
  isFirstDay: false,
  submissions: {
    11: {
      dayNumber: 11,
      githubUrl: 'https://github.com/arjunkumar-dev/abtalks-day11',
      linkedinUrl: 'https://linkedin.com/posts/arjunkumar-day11-ship',
      deploymentUrl: 'https://abtalks-day11.vercel.app',
      submittedAt: 'Yesterday, 11:30 PM',
      isSubmitted: true,
    },
    12: {
      dayNumber: 12,
      githubUrl: 'https://github.com/arjunkumar-dev/saas-pricing-day12',
      linkedinUrl: '',
      deploymentUrl: '',
      isSubmitted: false,
    }
  },
  dayRequirements: {
    12: {
      req_1: true,
      req_2: true,
      req_3: true,
      req_4: true,
      req_5: false,
      req_6: false,
      req_7: false,
    }
  },
  achievements: INITIAL_ACHIEVEMENTS,
};

const STORAGE_KEY = 'abtalks_app_state_v2';

export function loadStoredState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_APP_STATE;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_APP_STATE,
      ...parsed,
      student: { ...DEFAULT_APP_STATE.student, ...parsed.student },
    };
  } catch (e) {
    console.error('Failed to load state from localStorage', e);
    return DEFAULT_APP_STATE;
  }
}

export function saveStateToStorage(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save state to localStorage', e);
  }
}
