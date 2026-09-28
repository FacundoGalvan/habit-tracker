"use client";

import { Flame, Trophy, Zap, TrendingUp, Calendar as CalIcon } from "lucide-react";

// --- COMPONENTES SECUNDARIOS ---

const Header = () => (
  <div className="flex justify-between items-end mb-8">
    <div>
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Hola, Facundo 👋</h1>
      <p className="text-gray-500 text-sm font-medium mt-1">Lunes 28 de septiembre</p>
    </div>
    <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-2xl border border-orange-100 shadow-sm">
      <Flame className="text-orange-500" size={20} />
      <span className="font-bold text-orange-700">12 días</span>
    </div>
  </div>
);

const DailyProgress = () => (
  <div className="bg-gray-900 rounded-3xl p-6 text-white mb-8 shadow-lg relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 opacity-10">
      <Trophy size={100} />
    </div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">PROGRESO DE HOY</p>
          <div className="text-3xl font-bold flex items-baseline gap-2">
            80% <span className="text-lg font-medium text-gray-400">4/5</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-blue-400 font-bold text-sm">NIVEL 17</p>
          <p className="text-gray-400 text-xs mt-1">1,240 / 1,500 XP</p>
        </div>
      </div>

      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full w-[80%] transition-all duration-1000"></div>
      </div>
    </div>
  </div>
);

const HabitItem = ({ icon, name, current, target, unit, progress, completed, streak }: any) => (
  <div className="group flex items-center justify-between p-4 mb-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
    <div className="flex items-center gap-4">
      <span className={`text-2xl p-3 rounded-xl ${completed ? 'bg-green-50' : 'bg-gray-50'}`}>
        {icon}
      </span>
      <div>
        <h3 className={`font-bold ${completed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
          {name}
        </h3>
        <div className="flex items-center gap-3 mt-1">
          <p className="text-sm text-gray-400 font-medium">
            <span className={completed ? 'text-gray-400' : 'text-blue-600'}>{current}</span> / {target} {unit}
          </p>
          {streak > 0 && (
            <span className="flex items-center text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md">
              <Flame size={12} className="mr-1"/> {streak}
            </span>
          )}
        </div>
      </div>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="hidden sm:block w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${completed ? 'bg-green-400' : 'bg-blue-500'}`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <button 
        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all
          ${completed 
            ? 'bg-green-500 border-green-500 text-white' 
            : 'border-gray-200 group-hover:border-blue-500'}`}
      >
        {completed ? "✓" : <div className="w-2 h-2 bg-transparent rounded-full group-active:bg-blue-500"></div>}
      </button>
    </div>
  </div>
);

const InsightCard = () => (
  <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-8 flex gap-4 items-start">
    <div className="bg-white p-2 rounded-full shadow-sm text-indigo-500 mt-1">
      <Zap size={20} />
    </div>
    <div>
      <h4 className="text-indigo-900 font-bold mb-1">Insight del sistema</h4>
      <p className="text-indigo-700 text-sm leading-relaxed">
        Tus hábitos se completan un <strong>32% más</strong> cuando realizas tu entrenamiento por la mañana antes de las 10:00 AM.
      </p>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---

export default function Dashboard() {
  const mockHabits = [
    { id: 1, icon: "🧘‍♂️", name: "Meditar", current: 10, target: 10, unit: "min", progress: 100, completed: true, streak: 12 },
    { id: 2, icon: "📚", name: "Leer Kindle", current: 20, target: 20, unit: "min", progress: 100, completed: true, streak: 8 },
    { id: 3, icon: "🏋️‍♂️", name: "Entrenar", current: 35, target: 45, unit: "min", progress: 77, completed: false, streak: 6 },
    { id: 4, icon: "💧", name: "Tomar agua", current: 2, target: 2, unit: "L", progress: 100, completed: true, streak: 21 },
    { id: 5, icon: "📓", name: "Journaling", current: 0, target: 5, unit: "min", progress: 0, completed: false, streak: 0 },
  ];

  return (
<div className="min-h-screen bg-slate-50 text-slate-900 pb-20 selection:bg-blue-100">      
  <main className="max-w-2xl mx-auto p-6 md:p-8 font-sans">
        
        <Header />
        <DailyProgress />
        
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-gray-400 tracking-wider">TUS HÁBITOS HOY</h2>
          </div>
          
          <div className="flex flex-col gap-1">
            {mockHabits.map(habit => (
              <HabitItem key={habit.id} {...habit} />
            ))}
          </div>
        </section>

        <InsightCard />

        {/* Mini barra de navegación inferior móvil simulada */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-8 md:hidden">
          <CalIcon size={20} className="text-blue-400" />
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 -mt-6 border-4 border-gray-50">+</div>
          <TrendingUp size={20} className="text-gray-400" />
        </div>

      </main>
    </div>
  );
}