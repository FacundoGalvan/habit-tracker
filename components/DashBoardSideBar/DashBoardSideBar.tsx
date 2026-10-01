import { Flame, Trophy, Zap } from "lucide-react";

export const Header = () => (
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

export const DailyProgress = ({ total, completedCount }: { total: number, completedCount: number }) => {
  const percentage = total === 0 ? 0 : Math.round((completedCount / total) * 100);
  return (
    <div className="bg-[#131b2f] rounded-[2rem] p-8 mt-8 text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10"><Trophy size={120} /></div>
      <div className="relative z-10">
        <div className="flex justify-between items-end mb-5">
          <div>
            <p className="text-slate-400 text-xs font-bold mb-2 tracking-wider uppercase">Progreso de Hoy</p>
            <div className="text-5xl font-bold flex items-baseline gap-2">{percentage}% <span className="text-xl font-medium text-slate-400">{completedCount}/{total}</span></div>
          </div>
          <div className="text-right">
            <p className="text-indigo-400 font-bold text-sm">NIVEL 17</p>
            <p className="text-slate-400 text-xs mt-1">1,240 / 1,500 XP</p>
          </div>
        </div>
        <div className="w-full h-4 bg-slate-800/80 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(99,102,241,0.5)]" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export const InsightCard = () => (
  <div className="bg-[#f5f7ff] border border-indigo-50 rounded-[2rem] mt-8 p-7 flex gap-5 items-start shadow-sm">
    <div className="bg-white p-3 rounded-2xl shadow-sm text-indigo-500 mt-0.5"><Zap size={24} className="fill-indigo-100" /></div>
    <div>
      <h4 className="text-indigo-950 font-bold text-lg mb-2">Insight del sistema</h4>
      <p className="text-indigo-800 text-sm leading-relaxed font-medium">Tus hábitos se completan un <strong className="text-indigo-600">32% más</strong> cuando realizas tu entrenamiento por la mañana antes de las 10:00 AM.</p>
    </div>
  </div>
);