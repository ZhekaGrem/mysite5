import { Message } from '../model/store';

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export function ChatWindow({ messages, isLoading, error, messagesEndRef }: ChatWindowProps) {
  return (
    <div className="flex-1 space-y-3 overflow-y-auto p-4">
      {messages.length === 0 && (
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
          <p>Привіт! Я можу відповісти на питання про мене.</p>
          <p className="mt-2 text-sm">Напишіть своє питання нижче 👇</p>
        </div>
      )}

      {messages.map((message) => (
        <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-[80%] rounded-lg p-3 text-sm ${
              message.role === 'user'
                ? 'bg-highlight-light text-white dark:bg-accent-dark'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            } `}>
            {message.content}
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="flex justify-start">
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
            <div className="flex space-x-1">
              <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                style={{ animationDelay: '0.1s' }}></div>
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="rounded bg-red-50 p-2 text-center text-sm text-red-500 dark:bg-red-900/20 dark:text-red-400">
          {error}
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
