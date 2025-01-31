import React from 'react';
import Message from './Message';
import './Styles/MessageList.css';

const MessageList = ({ messages }) => (
  <div className="message-list">
    {messages.map(msg => <Message key={msg.id} message={msg} />)}
  </div>
);

export default MessageList;