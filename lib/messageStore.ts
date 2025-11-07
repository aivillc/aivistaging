import fs from 'fs';
import path from 'path';

const STORAGE_DIR = path.join('/tmp', 'chat-messages');

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

// Ensure storage directory exists
function ensureStorageDir() {
  if (!fs.existsSync(STORAGE_DIR)) {
    fs.mkdirSync(STORAGE_DIR, { recursive: true });
  }
}

function getSessionFile(sessionId: string): string {
  return path.join(STORAGE_DIR, `${sessionId}.json`);
}

export function getMessages(sessionId: string): Message[] {
  try {
    ensureStorageDir();
    const filePath = getSessionFile(sessionId);
    
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('[MessageStore] Error reading messages:', error);
    return [];
  }
}

export function addMessage(sessionId: string, message: Message): void {
  try {
    ensureStorageDir();
    const filePath = getSessionFile(sessionId);
    const messages = getMessages(sessionId);
    messages.push(message);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error('[MessageStore] Error adding message:', error);
  }
}

export function clearMessages(sessionId: string): void {
  try {
    const filePath = getSessionFile(sessionId);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    console.error('[MessageStore] Error clearing messages:', error);
  }
}
