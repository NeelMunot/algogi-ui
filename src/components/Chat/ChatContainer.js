import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import './Styles/ChatContainer.css';

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (content) => {
    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Mock bot response
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        content: `Echo: ${content}`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Interview Chat</h2>
      </div>
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatContainer;