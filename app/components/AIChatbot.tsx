"use client";
import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface AIChatbotProps {
  weatherCondition: string;
}

const weatherTips = {
  sunny: [
    "It's a sunny day! Don't forget to wear sunscreen and stay hydrated.",
    "Perfect weather for outdoor activities. Consider UV protection.",
    "Sunny conditions are great for vitamin D, but avoid peak sun hours (11am-3pm).",
  ],
  cloudy: [
    "Cloudy skies provide natural UV protection, but you might still need light layers.",
    "Great weather for outdoor walks without harsh sunlight.",
    "Cloudy conditions can be deceiving - you can still get sunburned.",
  ],
  rainy: [
    "Rainy weather ahead! Carry an umbrella and wear waterproof clothing.",
    "Roads may be slippery - drive carefully and allow extra time for travel.",
    "Perfect weather to stay cozy indoors with a warm drink.",
  ],
  snowy: [
    "Snow conditions detected! Dress warmly in layers and watch for icy surfaces.",
    "Visibility may be reduced - drive slowly and keep emergency supplies in your car.",
    "Beautiful snow weather! Perfect for winter activities but stay warm.",
  ],
  stormy: [
    "Stormy weather warning! Stay indoors and avoid unnecessary travel.",
    "Strong winds detected - secure loose objects and avoid tall structures.",
    "Storm conditions can be dangerous - have an emergency plan ready.",
  ],
};

export function AIChatbot({ weatherCondition }: AIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Auto-generate weather tip when weather changes
    if (weatherCondition && messages.length === 0) {
      const tips = weatherTips[weatherCondition as keyof typeof weatherTips];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      
      setTimeout(() => {
        setMessages([{
          id: Date.now().toString(),
          type: 'bot',
          content: `Hi! I'm your AI weather assistant. ${randomTip}`,
          timestamp: new Date(),
        }]);
      }, 2000);
    }
  }, [weatherCondition, messages.length]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response based on weather
    setTimeout(() => {
      const tips = weatherTips[weatherCondition as keyof typeof weatherTips];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: `Based on the current ${weatherCondition} conditions: ${randomTip}`,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat bubble trigger */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#00D1FF] rounded-full flex items-center justify-center shadow-lg hover:bg-[#00B8E6] transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X className="w-6 h-6 text-black" /> : <MessageCircle className="w-6 h-6 text-black" />}
        </button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 z-50 animate-fade-in">
          <div className="h-full rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/20">
              <div className="w-8 h-8 bg-[#00D1FF] rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-white text-sm">Weather Assistant</h3>
                <p className="text-gray-400 text-xs">AI-powered safety tips</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.type === 'user' ? 'bg-[#00D1FF]' : 'bg-gray-600'
                    }`}>
                      {message.type === 'user' ? 
                        <User className="w-3 h-3 text-black" /> : 
                        <Bot className="w-3 h-3 text-white" />
                      }
                    </div>
                    <div className={`rounded-lg p-3 text-sm ${
                      message.type === 'user' 
                        ? 'bg-[#00D1FF] text-black' 
                        : 'bg-white/10 text-white'
                    }`}>
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about weather safety..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D1FF]"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-[#00D1FF] rounded-lg flex items-center justify-center hover:bg-[#00B8E6] transition-colors"
                >
                  <Send className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}