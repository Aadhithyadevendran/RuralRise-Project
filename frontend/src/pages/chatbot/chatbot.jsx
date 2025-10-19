import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMsg = { from: 'User', text: message };

    try {
      const res = await axios.post('https://ruralrise-project-2.onrender.com/chat', { message });
      const aiMsg = { from: 'AI', text: res.data.response };

      setConversation((prev) => [...prev, userMsg, aiMsg]);
      setMessage('');
    } catch (err) {
      console.error(err);
      setConversation((prev) => [
        ...prev,
        userMsg,
        { from: 'AI', text: '⚠️ Error getting response' },
      ]);
    }
  };

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1A2A44] to-[#2C3E50] px-4 py-10">
      <div className="w-full max-w-4xl h-[500px] bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-blue-700 text-white px-6 py-4 text-xl font-semibold text-center">
          🤖 AI Chatbot Assistant
        </div>

        {/* Conversation Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 scroll-smooth">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.from === 'User' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`px-4 py-3 rounded-lg shadow-md max-w-xl text-sm ${
                  msg.from === 'User'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-green-600 text-white rounded-tl-none'
                }`}
              >
                <span className="block font-medium mb-1 text-xs opacity-70">{msg.from}</span>
                <span className="break-words">{msg.text}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t p-4 bg-white flex items-center gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
