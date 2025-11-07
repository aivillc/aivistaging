// Simple file-based session storage
// In production, use a proper database

import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'sessions.json');

export interface SessionData {
  sessionId: string;
  threadId?: string;
  messages: Array<{
    text: string;
    sender: 'user' | 'bot';
    timestamp: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

interface Database {
  sessions: Record<string, SessionData>;
}

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Load database
function loadDatabase(): Database {
  try {
    ensureDataDir();
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('[SessionDB] Error loading database:', error);
  }
  return { sessions: {} };
}

// Save database
function saveDatabase(db: Database) {
  try {
    ensureDataDir();
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
  } catch (error) {
    console.error('[SessionDB] Error saving database:', error);
  }
}

// Get session
export function getSession(sessionId: string): SessionData | null {
  const db = loadDatabase();
  return db.sessions[sessionId] || null;
}

// Create or update session
export function saveSession(sessionData: SessionData) {
  const db = loadDatabase();
  db.sessions[sessionData.sessionId] = {
    ...sessionData,
    updatedAt: new Date().toISOString(),
  };
  saveDatabase(db);
  console.log('[SessionDB] Saved session:', sessionData.sessionId);
}

// Add message to session
export function addMessageToSession(
  sessionId: string,
  message: string,
  sender: 'user' | 'bot'
) {
  const db = loadDatabase();
  
  if (!db.sessions[sessionId]) {
    db.sessions[sessionId] = {
      sessionId,
      messages: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  db.sessions[sessionId].messages.push({
    text: message,
    sender,
    timestamp: new Date().toISOString(),
  });

  db.sessions[sessionId].updatedAt = new Date().toISOString();
  
  saveDatabase(db);
  console.log('[SessionDB] Added message to session:', sessionId);
  
  return db.sessions[sessionId];
}

// Update threadId for session
export function updateThreadId(sessionId: string, threadId: string) {
  const db = loadDatabase();
  
  if (db.sessions[sessionId]) {
    db.sessions[sessionId].threadId = threadId;
    db.sessions[sessionId].updatedAt = new Date().toISOString();
    saveDatabase(db);
    console.log('[SessionDB] Updated threadId for session:', sessionId, '→', threadId);
  }
}

// Get all sessions
export function getAllSessions(): SessionData[] {
  const db = loadDatabase();
  return Object.values(db.sessions);
}

console.log('[SessionDB] Module loaded');
