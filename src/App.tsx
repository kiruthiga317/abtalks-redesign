import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';
import { ToastContainer } from './components/ToastContainer';
import { ProfileModal } from './components/ProfileModal';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { ChallengeDayPage } from './pages/ChallengeDayPage';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#090714] text-slate-100 flex flex-col font-sans selection:bg-violet-500 selection:text-white">
          <Header />
          <ToastContainer />
          <ProfileModal />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/day/:dayId" element={<ChallengeDayPage />} />
              {/* Fallback to landing */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <BottomNavigation />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
