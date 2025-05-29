// src/features/AiChat/ui/ChatWidget.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useChatStore } from '../model/store';
import { sendChatMessage } from '../api/chatApi';
import { ChatIcon } from './ChatIcon';
import { ChatWindow } from './ChatWindow';
import { ChatInput } from './ChatInput';
import { H } from '@/shared/ui/Htag';

function ChatWidget() {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { isOpen, messages, isLoading, error, toggleChat, closeChat, addMessage, setLoading, setError } =
    useChatStore();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setError(null);

    // Add user message immediately
    addMessage(userMessage, 'user');
    setLoading(true);

    try {
      const response = await sendChatMessage(userMessage);

      if (response.error) {
        setError(response.error);
      }

      // Add AI response
      addMessage(response.content, 'assistant');
    } catch (error) {
      setError("Помилка з'єднання. Перевірте інтернет.");
      console.error('Chat error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen
            ? 'bg-red-500 hover:bg-red-500'
            : 'bg-gradient-to-r from-accent-light to-highlight-light hover:shadow-xl dark:from-accent-dark dark:to-highlight-dark'
        } flex items-center justify-center text-white`}
        aria-label={isOpen ? 'Закрити чат' : 'Відкрити чат'}>
        <ChatIcon isOpen={isOpen} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="absolute bottom-16 right-0 flex h-96 w-80 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800"
          style={{ animation: 'slideUp 0.3s ease-out' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-highlight-light to-accent-light p-4 dark:from-accent-dark dark:to-highlight-dark">
            <div className="flex items-center justify-between">
              <H h="h3" className="shadow-text font-semibold text-[#d56270] dark:text-[#5003be]">
                AI Асистент
              </H>
              <button
                onClick={closeChat}
                className="shadow-text text-[#d56270] transition-colors hover:text-gray-200 dark:text-[#5003be]"
                aria-label="Закрити чат">
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            error={error}
            messagesEndRef={messagesEndRef}
          />

          {/* Input */}
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
export default ChatWidget;
