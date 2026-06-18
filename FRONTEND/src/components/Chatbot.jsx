import React, { useState, useEffect, useRef } from "react";
import "../styles/chatbot.css";

// You can use a Cloudinary URL for the bot avatar as well
const botAvatarUrl = "https://res.cloudinary.com/dtwjc8gng/image/upload/v1757260691/bot_a1nala.png"; 

// --- NEW: Exponential Backoff Helper Function ---
async function fetchWithRetry(url, options, maxRetries = 3, delayMs = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    const response = await fetch(url, options);
    
    // If successful or it's an error OTHER than 503, return immediately
    if (response.ok || response.status !== 503) {
      return response;
    }

    console.warn(`Attempt ${i + 1} failed with 503. Retrying in ${delayMs}ms...`);
    
    // If we have retries left, wait before looping again
    if (i < maxRetries - 1) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
      delayMs *= 2; // Double the delay for the next attempt
    }
  }
  
  // If we exhaust all retries, throw a specific 503 error
  throw new Error("503_OVERLOAD");
}

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hey There 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);

  // 1. Securely access the API key from the .env file
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

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
      console.log("Sending request to Gemini...");
      
      // --- UPDATED: Using fetchWithRetry instead of standard fetch ---
      const response = await fetchWithRetry(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userMessage.text }] }]
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.log("Error Response:", errorText);
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't get a response.";

      // 3. Update messages with the real reply
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { type: "bot", text: reply }
      ]);

    } catch (err) {
      console.error("Gemini Error:", err);
      
      // --- NEW: Custom UI error message based on the error type ---
      const errorMessage = err.message === "503_OVERLOAD" 
        ? "I'm experiencing unusually high traffic right now. Please try asking me again in a moment!" 
        : "Sorry, I encountered an error fetching a response.";

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { type: "bot", text: errorMessage }
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