export interface StudentProfile {
  name: string;
  initials: string;
  college: string;
  track: string;
  githubUsername: string;
  linkedinUrl: string;
  bio: string;
  avatarUrl?: string;
  isProfileComplete: boolean;
}

export interface TrackInfo {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner friendly';
  durationDays: number;
  studentsCount: number;
  iconName: string;
  gradient: string;
  popular?: boolean;
}

export interface TaskRequirement {
  id: string;
  text: string;
  completed: boolean;
}

export interface DayTask {
  dayNumber: number;
  title: string;
  subtitle: string;
  brief: string;
  estimatedTime: string; // e.g. "90 min"
  trackCategory: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  requirements: TaskRequirement[];
  acceptanceCriteria: string[];
}

export interface ProofSubmission {
  dayNumber: number;
  githubUrl: string;
  linkedinUrl: string;
  deploymentUrl: string;
  submittedAt?: string;
  isSubmitted: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface DayProgress {
  dayNumber: number;
  completed: boolean;
  githubSubmitted: boolean;
  linkedinSubmitted: boolean;
  deploymentSubmitted: boolean;
  dateStr?: string;
}

export interface AppState {
  student: StudentProfile;
  currentDay: number;
  currentStreak: number;
  longestStreak: number;
  completedDaysCount: number;
  momentumScore: number;
  missedYesterday: boolean;
  isFirstDay: boolean;
  submissions: Record<number, ProofSubmission>;
  dayRequirements: Record<number, Record<string, boolean>>;
  achievements: Achievement[];
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type: 'success' | 'info' | 'warning' | 'error';
}
