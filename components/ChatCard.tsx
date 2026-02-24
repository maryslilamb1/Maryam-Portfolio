"use client";

import { useState } from "react";
import Sticker from "../components/stickers";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatCard() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m Maryam’s portfolio assistant ✨ Ask me about her projects, experience, or skills.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    const next = [...messages, { role: "user", content: text } as Msg];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");

      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "I couldn’t reach the AI right now. Check OPENAI_API_KEY in .env.local (and Vercel env vars later).",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[2rem] bg-white/85 p-7 shadow-sm ring-1 ring-black/10 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <Sticker className="floaty">🤖 Ask Maryam (AI)</Sticker>
        <div className="text-xs text-black/60">{loading ? "Thinking…" : "Ready"}</div>
      </div>

      <div className="mt-4 h-[320px] overflow-y-auto rounded-2xl bg-white/70 p-3 ring-1 ring-black/5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ring-1 ring-black/5 ${
                m.role === "user" ? "bg-black text-white" : "bg-white text-black/80"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          className="w-full rounded-2xl bg-white/80 px-3 py-3 text-sm ring-1 ring-black/10 outline-none"
          placeholder='Try: "Summarize Maryam’s experience in 3 bullets"'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button
          onClick={send}
          disabled={loading}
          className="rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}