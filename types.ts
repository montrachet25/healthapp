
export interface Task {
  id: string;
  title: string;
  time: string;
  description?: string;
  status: 'pending' | 'completed' | 'ongoing';
  tags: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unlocked: boolean;
}

export type AppScreen = 
  | 'onboarding'
  | 'dashboard'
  | 'voice'
  | 'timer'
  | 'achievements'
  | 'report'
  | 'routines'
  | 'focus-alert';
