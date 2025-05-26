interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  disabled: boolean;
}

export function ChatInput({ value, onChange, onSubmit, isLoading, disabled }: ChatInputProps) {
  return (
    <form onSubmit={onSubmit} className="border-t border-gray-200 p-4 dark:border-gray-700">
      <div className="flex space-x-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Напишіть ваше питання..."
          disabled={disabled}
          className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-highlight-light disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-accent-dark"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="rounded-lg bg-highlight-light px-4 py-2 text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-accent-dark">
          {isLoading ? '...' : '→'}
        </button>
      </div>
    </form>
  );
}
