import React, { useState } from "react";
import { FaPaperPlane, FaLink, FaUserFriends } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import Sidebar from "../components/SideBar";

const AIAgent = () => {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Welcome Back, Kadin! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = {
        sender: "ai",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        {" "}
        {/* Added ml-64 */}
        {/* Profile Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <h2 className="text-lg font-semibold">AI Agent</h2>
          <div className="flex items-center space-x-4">
            <img
              src="https://github.com/shadcn.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium">Kadin Stanton</p>
              <p className="text-xs text-gray-500">kadin@example.com</p>
            </div>
          </div>
        </div>
        {/* Chat Area */}
        <div className="flex-1 px-6 py-4 space-y-4 overflow-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <img
                  src="https://github.com/shadcn.png" // AI Profile Icon
                  alt="AI"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-sm whitespace-pre-wrap shadow ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === "user" && (
                <img
                  src="https://github.com/shadcn.png" // User Profile Icon
                  alt="User"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start items-end">
              <img
                src="https://github.com/shadcn.png" // AI Profile Icon for typing...
                alt="AI"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div className="max-w-xs px-4 py-2 rounded-lg text-sm bg-gray-200 text-gray-800 shadow">
                <BsThreeDots className="animate-pulse text-xl" />
              </div>
            </div>
          )}
        </div>
        {/* Input Field with Quick Links */}
        <div className="bg-white px-6 py-4 shadow">
          <div className="mb-4">
            <h3 className="font-semibold text-sm mb-2">Quick Links</h3>
            <div className="flex justify-center flex-wrap gap-10">
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <FaLink /> SEND REFERRAL
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <IoIosAddCircle /> CREATE CAMPAIGN
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <CiSettings /> FOLLOW-UP
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
                <FaUserFriends /> VIEW REFERRAL
              </button>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-blue-600 text-xl"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgent;
