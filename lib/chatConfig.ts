/**
 * ChatBot Configuration Constants
 */
export const CHAT_CONFIG = {
  // Cache expiration time in minutes
  CACHE_EXPIRY_MINUTES: 30,
  
  // Polling interval for checking new messages (milliseconds)
  POLLING_INTERVAL_MS: 2000,
  
  // Delay before showing typing animation (milliseconds)
  TYPING_ANIMATION_DELAY_MS: 800,
  
  // Maximum wait time for typing indicator (milliseconds)
  TYPING_MAX_WAIT_MS: 30000,
  
  // Interval for checking cache expiration (milliseconds)
  CACHE_CHECK_INTERVAL_MS: 60000,
} as const;

/**
 * Generate unique message ID
 */
export const generateMessageId = (): number => {
  return Date.now() + Math.random();
};

/**
 * Generate unique session ID
 */
export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
