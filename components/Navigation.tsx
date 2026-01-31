
import React from 'react';
import { AppScreen } from '../types';

interface NavigationProps {
  currentScreen: AppScreen;
  setScreen: (screen: AppScreen) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentScreen, setScreen }) => {
  const tabs: { id: AppScreen; icon: string; label: string }[] = [
    { id: 'dashboard', icon: 'dashboard', label: 'Home' },
    { id: 'routines', icon: 'calendar_today', label: 'Schedule' },
    { id: 'report', icon: 'bar_chart', label: 'Stats' },
    { id: 'achievements', icon: 'military_tech', label: 'Badges' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface-dark/90 backdrop-blur-xl border-t border-gray-800 px-6 pb-8 pt-2 z-50 max-w-md mx-auto">
      <div className="flex justify-between items-center h-16">
        {tabs.slice(0, 2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setScreen(tab.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentScreen === tab.id ? 'text-white' : 'text-gray-500'
            }`}
          >
            <span className="material-icons-round text-2xl">{tab.icon}</span>
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}

        <div className="relative -top-6">
          <button 
            onClick={() => setScreen('voice')}
            className="h-14 w-14 rounded-full bg-mint text-primary shadow-lg shadow-mint/20 flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all"
          >
            <span className="material-icons-round text-3xl font-bold">add</span>
          </button>
        </div>

        {tabs.slice(2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setScreen(tab.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentScreen === tab.id ? 'text-white' : 'text-gray-500'
            }`}
          >
            <span className="material-icons-round text-2xl">{tab.icon}</span>
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
