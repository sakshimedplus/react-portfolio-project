import React, { useState } from 'react';
import './bot.css';

type Message = {
  sender: 'You' | 'Bot';
  text: string;
  type: 'user' | 'bot';
};

const RULES: Record<string, string> = {
  "hi": "Hello! How can I help you?",
  "hey": "Hello! How can I help you?",
  "hello": "Hi there! 😊",
  "what are your hours": "I am avilable open from 9am to 6pm, Monday to Friday.",
  "how can i contact you": "You can email ME at sakshidubey4467@gmil.com.com.",
  "bye": "Goodbye! Have a great day!"
};

const BotApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { sender: 'You', text: trimmed, type: 'user' };
    const botReply = getRuleBasedResponse(trimmed);
    const botMsg: Message = { sender: 'Bot', text: botReply, type: 'bot' };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  const getRuleBasedResponse = (msg: string): string => {
    const query = msg.toLowerCase();
    for (let key in RULES) {
      if (query.includes(key)) {
        return RULES[key];
      }
    }
    return "I'm not sure how to respond to that. 🤔";
  };

  return (
    <div className="chat-widget">
      <button className="chat-toggle" onClick={() => setIsOpen(prev => !prev)}>
        {isOpen ? '×' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">ChatBot</div>
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.type}`}>
                <div className="bubble">{msg.text}</div>
              </div>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BotApp;

