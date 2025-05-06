import { create } from 'zustand';

interface ProjectFilterState {
  category: string;
  setCategory: (category: string) => void;
}

export const useProjectFilter = create<ProjectFilterState>((set) => ({
  category: 'all',
  setCategory: (category) => set({ category }),
}));
