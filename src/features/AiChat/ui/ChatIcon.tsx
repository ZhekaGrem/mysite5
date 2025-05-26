import { MessageSquareX, BotMessageSquare } from 'lucide-react';

interface ChatIconProps {
  isOpen: boolean;
}

export function ChatIcon({ isOpen }: ChatIconProps) {
  return <>{isOpen ? <MessageSquareX /> : <BotMessageSquare />}</>;
}
