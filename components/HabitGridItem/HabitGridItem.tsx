import { Flame, Check } from "lucide-react";
import { Habit } from "@/types";

interface HabitGridItemProps extends Habit {
  onToggle?: (id: number | string) => void;
}

export default function HabitGridItem({ id, icon, name, current, target, unit, progress, completed, streak, onToggle }: HabitGridItemProps) {
  const size = 135; 
  const strokeWidth = 6; 
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const currentProgress = completed ? 100 : progress || 0; 
  const offset = circumference - (currentProgress / 100) * circumference;
  const innerButtonSize = size - (strokeWidth * 2);

  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative flex items-center justify-center mb-5" style={{ width: size, height: size }}>
        <svg className="absolute top-0 left-0 -rotate-90 w-full h-full drop-shadow-sm">
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="currentColor" strokeWidth={strokeWidth} fill="transparent" className="text-slate-200" />
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            stroke="currentColor" strokeWidth={strokeWidth} fill="transparent"
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
            className={`transition-all duration-1000 ease-out ${completed ? 'text-indigo-500' : 'text-blue-500'}`}
          />
        </svg>

        <button 
          onClick={() => onToggle && onToggle(id)}
          style={{ width: innerButtonSize, height: innerButtonSize }}
          className={`z-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${completed ? 'bg-indigo-50/80 text-indigo-600 shadow-inner' : 'bg-white text-slate-700 group-hover:shadow-md'}`}
        >
          <span className="text-4xl filter drop-shadow-sm transition-transform duration-300 group-active:scale-90">{icon}</span>
        </button>

        {completed && (
          <div className="absolute bottom-0 right-0 bg-indigo-500 text-white rounded-full p-2 border-4 border-slate-50 z-20 animate-in zoom-in duration-300 shadow-md">
            <Check size={18} strokeWidth={4} />
          </div>
        )}
      </div>

      <h3 className={`font-bold text-base text-center transition-colors ${completed ? 'text-slate-400' : 'text-slate-800'}`}>{name}</h3>
      <p className="text-[13px] text-slate-400 font-semibold mb-2.5 mt-1">{current} / {target} {unit}</p>
      
      {(streak ?? 0) > 0 && (
        <span className="flex items-center gap-1 text-[12px] font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">
          <Flame size={12} /> {streak}
        </span>
      )}
    </div>
  );
}