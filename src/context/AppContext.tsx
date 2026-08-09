import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppState, StudentProfile, ProofSubmission, ToastMessage } from '../types';
import { loadStoredState, saveStateToStorage, DEFAULT_APP_STATE, DAY_12_TASK } from '../data/mockData';

interface AppContextType {
  state: AppState;
  toasts: ToastMessage[];
  showToast: (title: string, description?: string, type?: ToastMessage['type']) => void;
  dismissToast: (id: string) => void;
  updateStudent: (profile: Partial<StudentProfile>) => void;
  toggleRequirement: (dayNumber: number, reqId: string) => void;
  updateSubmission: (dayNumber: number, submission: Partial<ProofSubmission>) => void;
  submitDay: (dayNumber: number) => void;
  // Evaluator / Demo helpers
  toggleMissedYesterday: () => void;
  toggleFirstDay: () => void;
  toggleProfileIncomplete: () => void;
  autoFillDemoProof: (dayNumber: number) => void;
  resetToDefaults: () => void;
  isProfileModalOpen: boolean;
  setIsProfileModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(loadStoredState);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    saveStateToStorage(state);
  }, [state]);

  const showToast = (title: string, description?: string, type: ToastMessage['type'] = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const updateStudent = (updated: Partial<StudentProfile>) => {
    setState((prev) => ({
      ...prev,
      student: {
        ...prev.student,
        ...updated,
        isProfileComplete: Boolean(
          (updated.githubUsername ?? prev.student.githubUsername) &&
          (updated.linkedinUrl ?? prev.student.linkedinUrl)
        ),
      },
    }));
    showToast('Profile Updated', 'Your student details have been saved.', 'success');
  };

  const toggleRequirement = (dayNumber: number, reqId: string) => {
    setState((prev) => {
      const currentMap = prev.dayRequirements[dayNumber] || {};
      const newValue = !currentMap[reqId];
      const updatedMap = { ...currentMap, [reqId]: newValue };
      
      return {
        ...prev,
        dayRequirements: {
          ...prev.dayRequirements,
          [dayNumber]: updatedMap,
        },
      };
    });
  };

  const updateSubmission = (dayNumber: number, submission: Partial<ProofSubmission>) => {
    setState((prev) => {
      const existing = prev.submissions[dayNumber] || {
        dayNumber,
        githubUrl: '',
        linkedinUrl: '',
        deploymentUrl: '',
        isSubmitted: false,
      };

      return {
        ...prev,
        submissions: {
          ...prev.submissions,
          [dayNumber]: {
            ...existing,
            ...submission,
          },
        },
      };
    });
  };

  const submitDay = (dayNumber: number) => {
    setState((prev) => {
      const currentSub = prev.submissions[dayNumber] || {
        dayNumber,
        githubUrl: '',
        linkedinUrl: '',
        deploymentUrl: '',
        isSubmitted: false,
      };

      const alreadySubmitted = currentSub.isSubmitted;
      const newStreak = alreadySubmitted ? prev.currentStreak : prev.currentStreak + 1;
      const newCompletedCount = alreadySubmitted ? prev.completedDaysCount : prev.completedDaysCount + 1;
      const newMomentum = Math.min(100, prev.momentumScore + (alreadySubmitted ? 0 : 4));

      return {
        ...prev,
        currentStreak: newStreak,
        longestStreak: Math.max(prev.longestStreak, newStreak),
        completedDaysCount: newCompletedCount,
        momentumScore: newMomentum,
        missedYesterday: false,
        submissions: {
          ...prev.submissions,
          [dayNumber]: {
            ...currentSub,
            submittedAt: 'Just now',
            isSubmitted: true,
          },
        },
      };
    });

    showToast('Day Submitted! 🎉', `Day ${dayNumber} proof of work is recorded. Streak updated!`, 'success');
  };

  const toggleMissedYesterday = () => {
    setState((prev) => {
      const nextValue = !prev.missedYesterday;
      showToast(
        nextValue ? 'Missed Yesterday State Active' : 'Streak Restored',
        nextValue ? 'Simulating a student who missed yesterday.' : 'Streak state returned to normal.',
        nextValue ? 'warning' : 'info'
      );
      return { ...prev, missedYesterday: nextValue };
    });
  };

  const toggleFirstDay = () => {
    setState((prev) => {
      const nextValue = !prev.isFirstDay;
      showToast(
        nextValue ? 'First Day State Active' : 'Normal State Restored',
        nextValue ? 'Streak set to 0 to test Day 1 user journey.' : 'Restored Arjun’s 11-day streak.',
        nextValue ? 'warning' : 'info'
      );
      return {
        ...prev,
        isFirstDay: nextValue,
        currentStreak: nextValue ? 0 : 11,
        completedDaysCount: nextValue ? 0 : 11,
      };
    });
  };

  const toggleProfileIncomplete = () => {
    setState((prev) => {
      const nextValue = !prev.student.isProfileComplete;
      showToast(
        nextValue ? 'Profile Completed' : 'Profile Incomplete State',
        nextValue ? 'GitHub and LinkedIn links are present.' : 'Testing empty links profile state.',
        'info'
      );
      return {
        ...prev,
        student: {
          ...prev.student,
          isProfileComplete: nextValue,
          githubUsername: nextValue ? 'arjunkumar-dev' : '',
          linkedinUrl: nextValue ? 'https://linkedin.com/in/arjunkumar-dev' : '',
        },
      };
    });
  };

  const autoFillDemoProof = (dayNumber: number) => {
    // Fill all 7 requirements to complete
    const reqMap: Record<string, boolean> = {};
    DAY_12_TASK.requirements.forEach((r) => {
      reqMap[r.id] = true;
    });

    setState((prev) => ({
      ...prev,
      dayRequirements: {
        ...prev.dayRequirements,
        [dayNumber]: reqMap,
      },
      submissions: {
        ...prev.submissions,
        [dayNumber]: {
          dayNumber,
          githubUrl: 'https://github.com/arjunkumar-dev/saas-pricing-day12',
          linkedinUrl: 'https://linkedin.com/posts/arjunkumar-day12-pricing-ship',
          deploymentUrl: 'https://abtalks-pricing-demo.vercel.app',
          isSubmitted: false,
        },
      },
    }));

    showToast('Demo Links Auto-filled', 'All 7 requirements checked & submission URLs pre-populated!', 'success');
  };

  const resetToDefaults = () => {
    setState(DEFAULT_APP_STATE);
    showToast('Reset to Default', 'Data reset to Arjun Kumar Day 12 state.', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        state,
        toasts,
        showToast,
        dismissToast,
        updateStudent,
        toggleRequirement,
        updateSubmission,
        submitDay,
        toggleMissedYesterday,
        toggleFirstDay,
        toggleProfileIncomplete,
        autoFillDemoProof,
        resetToDefaults,
        isProfileModalOpen,
        setIsProfileModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
