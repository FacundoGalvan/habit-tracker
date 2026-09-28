import mongoose, { Schema, Document } from 'mongoose';

export interface IHabit extends Document {
  name: string;
  description?: string;
  completedDates: Date[];
  currentStreak: number;
  longestStreak: number;
}

const HabitSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  completedDates: { type: [Date], default: [] },
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Habit || mongoose.model<IHabit>('Habit', HabitSchema);