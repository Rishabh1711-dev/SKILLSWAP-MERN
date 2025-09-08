import React, { useState } from "react";
import "../styles/chatbot.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hey There 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const API_KEY = "AIzaSyCxZ0iQGncn8PVas25hh19vTbq7lXoPDSI";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInput("");
    setMessages((prev) => [...prev, { type: "bot", text: "..." }]);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage }] }]
        })
      });

      const data = await response.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Oops! Something went wrong.";
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
      <div className="chat-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}-message`}>
            {msg.type === "bot" && (
              <img
                className="bot-avatar"
                src="/media/bot.png"
                alt="bot"
              />
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
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
