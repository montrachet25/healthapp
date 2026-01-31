
import React, { useState, useEffect } from 'react';
import { AppScreen, Task } from './types';
import { INITIAL_TASKS, CHRONOS_MASCOT, CHRONOS_CELEBRATION, BADGES } from './constants';
import Navigation from './components/Navigation';
import { getProductivityInsight } from './services/geminiService';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>('onboarding');
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [insight, setInsight] = useState<string>("Great job this week! You were most focused on Monday afternoons.");

  useEffect(() => {
    if (screen === 'report') {
      getProductivityInsight(tasks).then(setInsight);
    }
  }, [screen, tasks]);

  const renderScreen = () => {
    switch (screen) {
      case 'onboarding':
        return (
          <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-center">Tuesday, October 24</h2>
            <div className="relative">
              <div className="absolute inset-0 bg-mint/20 rounded-full blur-3xl -z-10 scale-150"></div>
              <img src={CHRONOS_MASCOT} alt="Chronos" className="w-64 drop-shadow-2xl" />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-extrabold font-display">Welcome!</h1>
              <p className="text-lg text-gray-400">What is the <span className="text-mint font-bold">one thing</span> you must do today?</p>
            </div>
            <div className="w-full space-y-4">
              <div className="bg-surface-dark rounded-2xl p-4 border-2 border-transparent focus-within:border-mint transition-all">
                <input 
                  type="text" 
                  placeholder="e.g. Finish the Q3 report..." 
                  className="w-full bg-transparent border-none focus:ring-0 text-xl font-semibold"
                />
              </div>
              <button 
                onClick={() => setScreen('dashboard')}
                className="w-full bg-mint text-primary font-bold text-xl py-4 rounded-2xl shadow-xl shadow-mint/10 active:scale-95 transition-all"
              >
                Let's Go
              </button>
            </div>
          </div>
        );

      case 'dashboard':
        return (
          <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 space-y-8 pt-10">
            <header className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Tuesday, Oct 24</p>
                <h1 className="text-4xl font-extrabold font-display">Hello, Alex</h1>
              </div>
              <button className="p-3 bg-surface-dark rounded-full"><span className="material-icons-round">notifications_none</span></button>
            </header>

            <div className="bg-accent/20 rounded-3xl p-6 border border-accent/30">
              <h2 className="text-xl font-bold mb-1">Great progress!</h2>
              <p className="text-gray-400 text-sm mb-4">You've completed 4 of 6 tasks today.</p>
              <div className="w-full bg-white/10 h-2 rounded-full mb-2">
                <div className="bg-mint h-full rounded-full w-2/3 shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
              </div>
              <p className="text-xs text-mint font-bold">66% Completed</p>
            </div>

            <section className="space-y-6">
              <div className="flex justify-between items-end">
                <h3 className="text-xl font-bold font-display">Timeline</h3>
                <button className="text-mint text-sm font-semibold" onClick={() => setScreen('routines')}>View Calendar</button>
              </div>
              <div className="relative pl-4 border-l-2 border-gray-800 space-y-8">
                {tasks.map((task) => (
                  <div key={task.id} className="relative pl-8 group">
                    <div className={`absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-background-dark shadow-sm transition-all ${
                      task.status === 'completed' ? 'bg-gray-700' : task.status === 'ongoing' ? 'bg-mint scale-125' : 'bg-surface-dark border-gray-700'
                    }`}></div>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-bold ${task.status === 'ongoing' ? 'text-white' : 'text-gray-500'}`}>{task.time}</span>
                      {task.status === 'ongoing' && <span className="text-[10px] bg-mint/20 text-mint px-2 py-0.5 rounded-full font-bold">NOW</span>}
                    </div>
                    <div 
                      onClick={() => task.status === 'ongoing' && setScreen('focus-alert')}
                      className={`p-5 rounded-2xl border border-gray-800 shadow-sm transition-all cursor-pointer hover:bg-white/5 ${
                        task.status === 'completed' ? 'opacity-40 grayscale' : 'bg-surface-dark'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className={`text-lg font-bold ${task.status === 'completed' ? 'line-through' : ''}`}>{task.title}</h4>
                          <p className="text-sm text-gray-400">{task.description}</p>
                          <div className="flex gap-2 mt-3">
                            {task.tags.map(tag => (
                              <span key={tag} className="text-[10px] bg-gray-700 text-gray-300 px-2 py-0.5 rounded-md">#{tag}</span>
                            ))}
                          </div>
                        </div>
                        <button className={`p-2 rounded-full transition-colors ${task.status === 'completed' ? 'text-mint' : 'bg-white/5 text-gray-600'}`}>
                          <span className="material-icons-round">{task.status === 'completed' ? 'check_circle' : 'radio_button_unchecked'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      case 'voice':
        return (
          <div className="flex-1 flex flex-col items-center justify-center px-6 relative animate-in zoom-in duration-300">
            <header className="absolute top-10 left-0 right-0 px-6 flex justify-between">
              <button onClick={() => setScreen('dashboard')} className="p-3"><span className="material-icons-round">close</span></button>
              <button className="p-3"><span className="material-icons-round">settings</span></button>
            </header>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold font-display leading-tight">I'm listening...<br/>Tell me your schedule!</h1>
            </div>
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-mint/20 rounded-full blur-[80px] animate-pulse-glow"></div>
              <div className="w-64 h-64 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center p-4">
                <img src={CHRONOS_MASCOT} alt="listening" className="w-full h-full object-contain scale-90" />
              </div>
              <div className="absolute bottom-4 right-4 bg-primary p-2 rounded-full shadow-xl">
                <span className="material-icons-round text-mint">graphic_eq</span>
              </div>
            </div>
            <div className="bg-surface-dark p-8 rounded-3xl w-full text-center border border-gray-800 shadow-2xl">
              <p className="text-2xl font-medium text-gray-200">"Tomorrow at 10 AM, meeting with client"</p>
              <div className="flex gap-1 justify-center mt-4">
                <div className="w-1.5 h-1.5 bg-mint rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-mint rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-mint rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
            <button 
              onClick={() => setScreen('dashboard')}
              className="mt-16 w-24 h-24 rounded-full bg-primary border-[6px] border-mint text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              <span className="material-icons-round text-5xl">mic</span>
            </button>
            <p className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Tap to Stop</p>
          </div>
        );

      case 'report':
        return (
          <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 pt-10 space-y-8 animate-in slide-in-from-right duration-300">
             <header className="text-center">
              <h1 className="text-2xl font-bold font-display">Weekly Report</h1>
            </header>
            <div className="flex gap-4 items-start">
              <div className="relative">
                <img src={CHRONOS_MASCOT} className="w-16 h-16 rounded-full border-2 border-mint bg-surface-dark object-cover p-1" />
                <span className="absolute -bottom-1 -right-1 bg-primary text-[10px] font-bold px-1.5 py-0.5 rounded border border-gray-800">Pro</span>
              </div>
              <div className="bg-surface-dark p-5 rounded-2xl rounded-tl-none border border-gray-800 flex-1">
                <p className="text-lg leading-relaxed">{insight}</p>
              </div>
            </div>

            <section className="bg-surface-dark rounded-3xl p-6 border border-gray-800 space-y-6">
              <h3 className="font-bold">Daily Focus Hours</h3>
              <div className="flex items-end justify-between h-40 gap-2">
                {[80, 50, 40, 70, 60, 30, 20].map((h, i) => (
                  <div key={i} className="flex flex-col items-center flex-1 gap-2 group cursor-pointer">
                    <div className={`w-full max-w-[20px] rounded-t-lg transition-all ${i === 0 ? 'bg-mint' : 'bg-gray-800 group-hover:bg-gray-700'}`} style={{ height: `${h}%` }}></div>
                    <span className="text-[10px] text-gray-500">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-dark p-5 rounded-2xl border-l-4 border-mint">
                <p className="text-xs text-gray-500 mb-1">Total Focus</p>
                <p className="text-3xl font-extrabold font-display">24h</p>
              </div>
              <div className="bg-surface-dark p-5 rounded-2xl border-l-4 border-mint">
                <p className="text-xs text-gray-500 mb-1">Completion</p>
                <p className="text-3xl font-extrabold font-display">92%</p>
              </div>
            </div>

            <div className="bg-surface-dark p-5 rounded-2xl border-l-4 border-mint flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">Top Task Category</p>
                <p className="text-xl font-bold font-display">Writing & Strategy</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-mint/10 flex items-center justify-center text-mint">
                <span className="material-icons-round">trophy</span>
              </div>
            </div>

            <button className="w-full bg-mint py-5 rounded-2xl font-bold text-primary text-lg shadow-xl shadow-mint/10">
              Plan Next Week
            </button>
          </div>
        );

      case 'achievements':
        return (
          <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 pt-10 space-y-8 animate-in slide-in-from-right duration-300">
            <header className="flex justify-between items-center">
              <button onClick={() => setScreen('dashboard')} className="p-2"><span className="material-icons-round">arrow_back</span></button>
              <h1 className="text-xl font-bold font-display">Achievements</h1>
              <button className="p-2"><span className="material-icons-round">settings</span></button>
            </header>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <img src={CHRONOS_MASCOT} className="w-24 h-24 rounded-full border-4 border-surface-dark p-1 bg-primary shadow-2xl" />
                <div className="absolute -bottom-2 -right-2 bg-mint text-primary p-1.5 rounded-full"><span className="material-icons-round text-sm font-bold">celebration</span></div>
              </div>
              <h2 className="text-2xl font-bold font-display">You've earned 12 badges!<br/>Keep it up!</h2>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold">
                <span>Collection Progress</span>
                <span className="text-mint">12/50 Badges</span>
              </div>
              <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
                <div className="bg-mint h-full rounded-full w-[24%]"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {BADGES.map(badge => (
                <div key={badge.id} className={`flex flex-col items-center text-center p-4 rounded-3xl transition-all ${badge.unlocked ? 'bg-surface-dark border border-gray-800' : 'bg-surface-dark/40 opacity-50 grayscale'}`}>
                  <div className="w-full aspect-square rounded-full mb-3 bg-gradient-to-br from-gray-700 to-gray-800 p-1">
                    <img src={badge.imageUrl} alt={badge.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <p className="font-bold text-sm mb-1">{badge.name}</p>
                  <p className={`text-[10px] font-medium flex items-center justify-center gap-1 ${badge.unlocked ? 'text-mint' : 'text-gray-500'}`}>
                    <span className="material-icons-round text-xs">{badge.unlocked ? 'check_circle' : 'lock'}</span>
                    {badge.unlocked ? 'Unlocked' : 'Locked'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'timer':
        return (
          <div className="flex-1 flex flex-col items-center justify-between px-6 py-16 animate-in fade-in duration-500">
            <div className="bg-gray-800/40 px-5 py-2 rounded-full border border-gray-700 flex items-center gap-2">
              <span className="material-icons-round text-mint text-sm">edit_note</span>
              <p className="text-sm">Focusing on <span className="font-bold">Write Proposal</span></p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border-8 border-gray-800 flex flex-col items-center justify-center">
                <h1 className="text-8xl font-black font-display tracking-tighter">24:59</h1>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mt-2">Time Remaining</p>
              </div>
              <div className="absolute inset-0 rounded-full border-8 border-mint/40 border-t-mint animate-spin [animation-duration:10s]"></div>
            </div>
            <div className="w-full space-y-6">
              <button 
                onClick={() => setScreen('dashboard')}
                className="w-full bg-primary py-5 rounded-full flex items-center justify-center gap-3 font-bold text-lg shadow-2xl border border-gray-800"
              >
                <span className="material-icons-round text-mint">stop_circle</span>
                End Focus
              </button>
              <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer hover:text-white">Add 5 Minutes</p>
            </div>
          </div>
        );

      case 'routines':
        return (
          <div className="flex-1 flex flex-col px-6 pt-10 pb-24 space-y-8 animate-in slide-in-from-bottom duration-300">
            <header className="flex items-center">
              <button onClick={() => setScreen('dashboard')} className="p-2 -ml-2"><span className="material-icons-round">arrow_back</span></button>
              <h1 className="text-xl font-bold font-display flex-1 text-center">Routine Library</h1>
              <div className="w-10"></div>
            </header>
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold leading-tight">Which routine shall we add today?</h2>
              <p className="text-gray-500">Select a template to get started.</p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Tax Reporting', desc: 'Quarterly filing preparation.', icon: 'receipt_long' },
                { title: 'Newsletter Publishing', desc: 'Draft, edit, and schedule.', icon: 'mark_email_unread' },
                { title: 'Weekly Review', desc: 'Analyze metrics and plan ahead.', icon: 'manage_search' },
                { title: 'Client Networking', desc: 'Follow up with 3 leads.', icon: 'coffee' }
              ].map((r, i) => (
                <div key={i} className="bg-surface-dark p-4 rounded-2xl border border-gray-800 flex items-center gap-4 group hover:border-mint transition-colors cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-mint group-hover:scale-110 transition-transform">
                    <span className="material-icons-round text-2xl">{r.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg">{r.title}</p>
                    <p className="text-xs text-gray-500">{r.desc}</p>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-primary text-mint flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                    <span className="material-icons-round font-bold">add</span>
                  </button>
                </div>
              ))}
            </div>
            <button className="text-gray-500 font-bold text-sm flex items-center justify-center gap-2 py-4">
              <span className="material-icons-round text-sm">edit</span>
              Create custom routine
            </button>
          </div>
        );

      case 'focus-alert':
        return (
          <div className="flex-1 flex flex-col justify-between px-6 py-16 animate-in slide-in-from-bottom duration-500 bg-background-dark">
            <div className="text-center flex flex-col items-center">
              <div className="bg-surface-dark/60 px-4 py-2 rounded-full border border-gray-800 mb-12 flex items-center gap-2">
                <span className="material-icons-round text-mint text-sm">schedule</span>
                <span className="text-xs font-bold uppercase tracking-widest">Up Next</span>
              </div>
              <h1 className="text-5xl font-black font-display leading-[1.1] mb-12">
                15 minutes until <br/>
                <span className="text-mint">Write Proposal!</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xs mx-auto">Shall we turn on Do Not Disturb mode to focus?</p>
            </div>
            <div className="space-y-4">
              <button 
                onClick={() => setScreen('timer')}
                className="w-full bg-mint text-primary font-bold text-xl py-6 rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-mint/20"
              >
                <span className="material-icons-round">self_improvement</span>
                Start Focusing
              </button>
              <button 
                onClick={() => setScreen('dashboard')}
                className="w-full py-4 text-gray-500 font-bold uppercase tracking-widest text-sm hover:text-white"
              >
                Not now
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto relative overflow-hidden bg-background-dark selection:bg-mint selection:text-primary">
      {renderScreen()}
      {screen !== 'onboarding' && screen !== 'voice' && screen !== 'focus-alert' && (
        <Navigation currentScreen={screen} setScreen={setScreen} />
      )}
    </div>
  );
};

export default App;
