"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Habit } from "@/types";
import HabitGridItem from "@/components/HabitGridItem/HabitGridItem";
import { Header, DailyProgress, InsightCard } from "@/components/DashBoardSideBar/DashBoardSideBar";

export default function Dashboard() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, icon: "🧘‍♂️", name: "Meditar", current: 10, target: 10, unit: "min", progress: 100, completed: true, streak: 12 },
    { id: 2, icon: "📚", name: "Leer Kindle", current: 20, target: 20, unit: "min", progress: 100, completed: true, streak: 8 },
    { id: 3, icon: "🏋️‍♂️", name: "Entrenar", current: 35, target: 45, unit: "min", progress: 77, completed: false, streak: 6 },
    { id: 4, icon: "💧", name: "Tomar agua", current: 2, target: 2, unit: "L", progress: 100, completed: true, streak: 21 },
    { id: 5, icon: "📓", name: "Journaling", current: 0, target: 5, unit: "min", progress: 0, completed: false, streak: 0 },
    { id: "add", isAddButton: true }
  ]);

  const toggleHabit = (id: number | string) => {
    setHabits(currentHabits => 
      currentHabits.map(habit => {
        if (habit.id === id && !habit.isAddButton) {
          const isNowCompleted = !habit.completed;
          return {
            ...habit,
            completed: isNowCompleted,
            current: isNowCompleted ? habit.target : 0, 
            progress: isNowCompleted ? 100 : 0
          };
        }
        return habit;
      })
    );
  };

  const actualHabits = habits.filter(h => !h.isAddButton);
  const totalHabitsCount = actualHabits.length;
  const completedHabitsCount = actualHabits.filter(h => h.completed).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 font-sans">
      <main className="max-w-[1400px] mx-auto p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <Header />
            <DailyProgress total={totalHabitsCount} completedCount={completedHabitsCount} />
            <InsightCard />
          </div>

          {/* COLUMNA DERECHA */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-between items-center mb-10 lg:mt-6">
              <h2 className="text-[13px] font-bold text-slate-400 tracking-[0.2em] uppercase">Tus Hábitos Hoy</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
              {habits.map((habit) => {
                if (habit.isAddButton) {
                  return (
                    <div key="add" className="flex flex-col items-center justify-start group cursor-pointer mt-2 hover:opacity-80 transition-opacity">
                      <button className="w-[105px] h-[105px] rounded-full border-[3px] border-dashed border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-indigo-300 group-hover:text-indigo-500 group-hover:bg-indigo-50/50 transition-all duration-300">
                        <Plus size={36} strokeWidth={2} />
                      </button>
                      <h3 className="font-bold text-sm text-slate-400 mt-8 group-hover:text-indigo-500 transition-colors">Nuevo Hábito</h3>
                    </div>
                  );
                }
                return <HabitGridItem key={habit.id} {...habit} onToggle={toggleHabit} />;
              })}
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}