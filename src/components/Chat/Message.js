import React from 'react';
import './Styles/Message.css';

const Message = ({ message }) => (
  <div className={`message ${message.sender}`}>
    <div className="message-content">{message.content}</div>
    <div className="message-time">
      {new Date(message.timestamp).toLocaleTimeString()}
    </div>
  </div>
);

export default Message;