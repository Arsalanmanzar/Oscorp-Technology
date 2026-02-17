import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { generateAdvisorResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
        id: 'welcome',
        role: 'model',
        text: 'Hello! I am the Oscorp AI Advisor. How can I help you shape your future today?',
        timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Prepare history for API (excluding the just added user message for the history array passed to service if we were strictly following the service signature, but here we pass full history including user msg as context or handle it in service. 
    // The service takes history. Let's pass the previous messages + the new one for context if stateless, or just let service handle session.)
    // For this simple implementation, we'll pass the messages array converted to simple objects.
    
    const historyForService = messages.map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await generateAdvisorResponse(userMsg.text, historyForService);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] shadow-2xl rounded-lg border border-oscorp-neutral flex flex-col mb-4 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="bg-oscorp-secondary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
                <Bot className="text-oscorp-accent" size={20} />
                <div>
                    <h3 className="font-bold text-sm">Oscorp Advisor</h3>
                    <p className="text-[10px] text-gray-400">Powered by Gemini 3.0</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 text-sm rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-oscorp-secondary text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-oscorp-accent rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-oscorp-accent rounded-full animate-bounce delay-75" />
                    <div className="w-2 h-2 bg-oscorp-accent rounded-full animate-bounce delay-150" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-oscorp-neutral">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about courses..."
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-oscorp-accent focus:ring-1 focus:ring-oscorp-accent"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-oscorp-accent text-oscorp-secondary p-2 rounded-md hover:bg-[#D4A017] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2 bg-oscorp-secondary text-white px-5 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
        >
            <span className="font-semibold text-sm hidden group-hover:block transition-all">Course Advisor</span>
            <MessageSquare className="text-oscorp-accent" size={24} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-oscorp-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-oscorp-accent"></span>
            </span>
        </button>
      )}
    </div>
  );
};