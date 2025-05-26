// src/features/AiChat/model/store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  error: string | null;

  // Actions
  toggleChat: () => void;
  closeChat: () => void;
  addMessage: (content: string, role: 'user' | 'assistant') => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      isOpen: false,
      messages: [],
      isLoading: false,
      error: null,

      toggleChat: () =>
        set((state) => ({
          isOpen: !state.isOpen,
          error: null, // Clear errors when opening
        })),

      closeChat: () => set({ isOpen: false }),

      addMessage: (content: string, role: 'user' | 'assistant') => {
        const message: Message = {
          id: Date.now().toString(),
          content,
          role,
          timestamp: new Date(),
        };
        set((state) => ({
          messages: [...state.messages, message],
        }));
      },

      setLoading: (loading: boolean) => set({ isLoading: loading }),

      setError: (error: string | null) => set({ error }),

      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'ai-chat-storage',
      partialize: (state) => ({ messages: state.messages }), // Only persist messages
    }
  )
);
