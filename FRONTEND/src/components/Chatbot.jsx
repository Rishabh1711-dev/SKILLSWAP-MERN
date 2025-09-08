import React, { useState, useEffect, useRef } from "react";
import "../styles/chatbot.css";
// You can use a Cloudinary URL for the bot avatar as well
const botAvatarUrl = "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260691/bot_a1nala.png"; 

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hey There 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);

  // 1. Securely access the API key from the .env file
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (!API_KEY) {
      console.error("Gemini API Key is missing!");
      alert("The chatbot is not configured correctly. Missing API Key.");
      return;
    }

    const userMessage = { type: "user", text: input.trim() };
    const thinkingMessage = { type: "bot", text: "..." };

    setMessages((prev) => [...prev, userMessage, thinkingMessage]);
    setInput("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage.text }] }]
        })
      });
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get a response.";

      // 3. Update messages with the real reply
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { type: "bot", text: reply }
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { type: "bot", text: "Error fetching response." }
      ]);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}-message`}>
            {msg.type === "bot" && (
              <img className="bot-avatar" src={botAvatarUrl} alt="bot" />
            )}
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>
      <form className="chat-footer" onSubmit={sendMessage}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              sendMessage(e);
            }
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}