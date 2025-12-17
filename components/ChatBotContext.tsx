'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface ChatBotContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  hideFloatingButton: boolean;
  setHideFloatingButton: (hide: boolean) => void;
}

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export function ChatBotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hideFloatingButton, setHideFloatingButton] = useState(false);

  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);
  const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <ChatBotContext.Provider value={{
      isOpen,
      openChat,
      closeChat,
      toggleChat,
      hideFloatingButton,
      setHideFloatingButton
    }}>
      {children}
    </ChatBotContext.Provider>
  );
}

export function useChatBot() {
  const context = useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error('useChatBot must be used within a ChatBotProvider');
  }
  return context;
}

// Safe hook that doesn't throw if context is missing
export function useChatBotSafe() {
  const context = useContext(ChatBotContext);
  return context;
}
