'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId] = useState(() => {
    const id = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    console.log('ChatBot Session ID:', id);
    return id;
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm AIVI, your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Poll for backend AI messages
  useEffect(() => {
    if (!isOpen) return;

    const pollMessages = async () => {
      try {
        console.log('Polling for messages with sessionId:', sessionId);
        const response = await fetch(`/api/chat?sessionId=${sessionId}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Poll response:', data);
          if (data.messages && data.messages.length > 0) {
            console.log('Received messages:', data.messages);
            const newMessages = data.messages.map((msg: any) => ({
              id: msg.id,
              text: msg.text,
              sender: msg.sender,
              timestamp: new Date(msg.timestamp),
            }));
            setMessages((prev) => [...prev, ...newMessages]);
            
            // Send bot messages to prospects API immediately
            try {
              console.log('Sending bot messages to prospects API');
              await fetch('/api/chat/submit', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  sessionId,
                  messages: newMessages.map((msg: Message) => ({
                    text: msg.text,
                    sender: msg.sender,
                    timestamp: msg.timestamp.toISOString(),
                  })),
                }),
              });
              console.log('Bot messages sent to prospects API');
            } catch (error) {
              console.error('Error sending bot messages to prospects API:', error);
            }
          }
        }
      } catch (error) {
        console.error('Error polling messages:', error);
      }
    };

    // Poll every 2 seconds
    pollingIntervalRef.current = setInterval(pollMessages, 2000);

    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, [isOpen, sessionId]);

  // Submit conversation when chat is closed
  const handleCloseChat = async () => {
    console.log('Closing chat, preparing to submit...');
    console.log('Current messages:', messages);
    
    // Only submit if there are user messages
    const hasUserMessages = messages.some(msg => msg.sender === 'user');
    console.log('Has user messages:', hasUserMessages, 'Total messages:', messages.length);
    
    if (hasUserMessages && messages.length > 1) {
      try {
        console.log('Submitting to /api/chat/submit with sessionId:', sessionId);
        const response = await fetch('/api/chat/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId,
            messages: messages.map(msg => ({
              text: msg.text,
              sender: msg.sender,
              timestamp: msg.timestamp.toISOString(),
            })),
          }),
        });
        const result = await response.json();
        console.log('Chat submission response:', result);
      } catch (error) {
        console.error('Error submitting chat:', error);
      }
    } else {
      console.log('Skipping submission - no user messages or only welcome message');
    }
    
    setIsOpen(false);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Send user message to prospects API immediately
    try {
      console.log('Sending user message to prospects API:', userMessage);
      await fetch('/api/chat/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          messages: [{
            text: userMessage.text,
            sender: userMessage.sender,
            timestamp: userMessage.timestamp.toISOString(),
          }],
        }),
      });
      console.log('User message sent to prospects API');
    } catch (error) {
      console.error('Error sending message to prospects API:', error);
    }

    // Simulate bot response (in production, backend will push real responses)
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "Thanks for your message! I'm connected to AIVI's backend. Your backend AI can now respond to this conversation via the API endpoint.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
        
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-96 h-[600px] bg-black/95 border-2 border-purple-500/50 rounded-2xl shadow-2xl z-50 flex flex-col backdrop-blur-xl animate-scaleIn">
          {/* Header */}
          <div className="p-4 border-b border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-orange-500/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center">
                <span className="text-white font-black text-lg">AI</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">AIVI</h3>
                <p className="text-white/50 text-xs">AI Assistant • Online</p>
              </div>
              <button
                onClick={handleCloseChat}
                className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
                      : 'bg-white/5 border border-purple-500/30 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user'
                        ? 'text-white/70'
                        : 'text-white/50'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-purple-500/30">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-bold rounded-xl transition-all hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
