"use client";

import { Flame, Trophy, Check, Zap, Plus } from "lucide-react";

// --- COMPONENTES SECUNDARIOS ---

const Header = () => (
  <div className="flex flex-col items-start pt-2">
    <div className="flex items-center gap-4">
      <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Hola, Facundo 👋</h1>
      <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-xl shadow-sm border border-orange-100">
        <Flame className="text-orange-500" size={18} />
        <span className="font-bold text-orange-700 text-sm">12 días</span>
      </div>
    </div>
    <p className="text-slate-500 font-medium mt-2 text-lg">Lunes 28 de septiembre</p>
  </div>
);

const DailyProgress = () => (
  <div className="bg-[#131b2f] rounded-[2rem] p-8 mt-8 text-white shadow-xl relative overflow-hidden">
    <div className="absolute top-0 right-0 p-8 opacity-10">
      <Trophy size={120} />
    </div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-end mb-5">
        <div>
          <p className="text-slate-400 text-xs font-bold mb-2 tracking-wider uppercase">Progreso de Hoy</p>
          <div className="text-5xl font-bold flex items-baseline gap-2">
            80% <span className="text-xl font-medium text-slate-400">4/5</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-indigo-400 font-bold text-sm">NIVEL 17</p>
          <p className="text-slate-400 text-xs mt-1">1,240 / 1,500 XP</p>
        </div>
      </div>

      <div className="w-full h-4 bg-slate-800/80 rounded-full overflow-hidden mt-4">
        <div className="h-full bg-indigo-500 rounded-full w-[80%] transition-all duration-1000 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
      </div>
    </div>
  </div>
);

const InsightCard = () => (
  <div className="bg-[#f5f7ff] border border-indigo-50 rounded-[2rem] mt-8 p-7 flex gap-5 items-start shadow-sm">
    <div className="bg-white p-3 rounded-2xl shadow-sm text-indigo-500 mt-0.5">
      <Zap size={24} className="fill-indigo-100" />
    </div>
    <div>
      <h4 className="text-indigo-950 font-bold text-lg mb-2">Insight del sistema</h4>
      <p className="text-indigo-800 text-sm leading-relaxed font-medium">
        Tus hábitos se completan un <strong className="text-indigo-600">32% más</strong> cuando realizas tu entrenamiento por la mañana antes de las 10:00 AM.
      </p>
    </div>
  </div>
);

const HabitGridItem = ({ icon, name, current, target, unit, progress, completed, streak }: any) => {
  const size = 135; // Tamaño del círculo aumentado para más respiro
  const strokeWidth = 6; // Anillo más grueso
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const currentProgress = completed ? 100 : progress; 
  const offset = circumference - (currentProgress / 100) * circumference;
  const innerButtonSize = size - (strokeWidth * 2);
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative flex items-center justify-center mb-5" style={{ width: size, height: size }}>
        
        {/* SVG para los Anillos de Progreso */}
        <svg className="absolute top-0 left-0 -rotate-90 w-full h-full drop-shadow-sm">
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            stroke="currentColor" strokeWidth={strokeWidth} fill="transparent"
            className="text-slate-200"
          />
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            stroke="currentColor" strokeWidth={strokeWidth} fill="transparent"
            strokeDasharray={circumference} 
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={`transition-all duration-1000 ease-out ${
              completed ? 'text-indigo-500' : 'text-blue-500'
            }`}
          />
        </svg>

        {/* Círculo Central */}
<button 
          style={{ width: innerButtonSize, height: innerButtonSize }}
          className={`z-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm
            ${completed 
              ? 'bg-indigo-50/80 text-indigo-600 shadow-inner' 
              : 'bg-white text-slate-700 group-hover:shadow-md'
            }`}
        >
          <span className="text-4xl filter drop-shadow-sm">{icon}</span>
        </button>
        {/* Tick Flotante */}
        {completed && (
          <div className="absolute bottom-0 right-0 bg-indigo-500 text-white rounded-full p-2 border-4 border-slate-50 z-20 animate-in zoom-in duration-300 shadow-md">
            <Check size={18} strokeWidth={4} />
          </div>
        )}
      </div>

      <h3 className={`font-bold text-base text-center transition-colors ${completed ? 'text-slate-400' : 'text-slate-800'}`}>
        {name}
      </h3>
      <p className="text-[13px] text-slate-400 font-semibold mb-2.5 mt-1">
        {current} / {target} {unit}
      </p>

      {streak > 0 && (
        <span className="flex items-center gap-1 text-[12px] font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
          <Flame size={12} /> {streak}
        </span>
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

export default function Dashboard() {
  const mockHabits = [
    { id: 1, icon: "🧘‍♂️", name: "Meditar", current: 10, target: 10, unit: "min", progress: 100, completed: true, streak: 12 },
    { id: 2, icon: "📚", name: "Leer Kindle", current: 20, target: 20, unit: "min", progress: 100, completed: true, streak: 8 },
    { id: 3, icon: "🏋️‍♂️", name: "Entrenar", current: 35, target: 45, unit: "min", progress: 77, completed: false, streak: 6 },
    { id: 4, icon: "💧", name: "Tomar agua", current: 2, target: 2, unit: "L", progress: 100, completed: true, streak: 21 },
    { id: 5, icon: "📓", name: "Journaling", current: 0, target: 5, unit: "min", progress: 0, completed: false, streak: 0 },
    { id: "add", isAddButton: true }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 font-sans">
      <main className="max-w-[1400px] mx-auto p-8 md:p-12">
        
        {/* Contenedor 50/50 */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <Header />
            <DailyProgress />
            <InsightCard />
          </div>

          {/* COLUMNA DERECHA (50%) */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-between items-center mb-10 lg:mt-6">
              <h2 className="text-[13px] font-bold text-slate-400 tracking-[0.2em] uppercase">Tus Hábitos Hoy</h2>
            </div>
            
            {/* Grid forzado a 3 columnas */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
              {mockHabits.map((habit: any) => {
                if (habit.isAddButton) {
                  return (
                    <div key="add" className="flex flex-col items-center justify-start group cursor-pointer mt-2">
                      <button className="w-[105px] h-[105px] rounded-full border-[3px] border-dashed border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-indigo-300 group-hover:text-indigo-500 group-hover:bg-indigo-50/50 transition-all duration-300">
                        <Plus size={36} strokeWidth={2} />
                      </button>
                      <h3 className="font-bold text-sm text-slate-400 mt-8 group-hover:text-indigo-500 transition-colors">
                        Nuevo Hábito
                      </h3>
                    </div>
                  );
                }
                return <HabitGridItem key={habit.id} {...habit} />;
              })}
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}