import React, { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ScrollArea } from "./ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm MoodBuddy. How are you feeling today?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "I'm here to listen and support you. Can you tell me more about what's on your mind?",
        sender: 'bot'
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white rounded-lg shadow-lg">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold">Chat with MoodBuddy</h2>
      </div>
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`flex items-start ${
                message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src={message.sender === 'user' ? "/user-avatar.png" : "/moodbuddy-avatar.png"} />
                <AvatarFallback>{message.sender === 'user' ? 'U' : 'MB'}</AvatarFallback>
              </Avatar>
              <div
                className={`mx-2 p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex space-x-2"
        >
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;

