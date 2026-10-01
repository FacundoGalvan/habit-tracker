export type Habit = {
  id: number | string;
  icon?: string;
  name?: string;
  current?: number;
  target?: number;
  unit?: string;
  progress?: number;
  completed?: boolean;
  streak?: number;
  isAddButton?: boolean;
};