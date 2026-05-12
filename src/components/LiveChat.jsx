import { useEffect, useRef, useState } from "react";
import { FiX, FiMessageCircle } from "react-icons/fi";

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const [messages, setMessages] = useState([
    { type: "bot", text: "👋 Welcome to TechZone Support!" },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const botReply = (msg) => {
    const m = msg.toLowerCase();

    if (m.includes("delivery"))
      return "🚚 Delivery: 2–5 days all over Bangladesh";

    if (m.includes("price"))
      return "💰 Price info available in Shop page";

    if (m.includes("location"))
      return "📍 Mirzapur, Dhaka, Bangladesh";

    return "🤖 Ask about delivery, price or location";
  };

  const sendMessage = () => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text }]);

    const userMsg = text;
    setText("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: botReply(userMsg) },
      ]);
    }, 500);
  };

  return (
    <>
      {/* FLOAT BUTTON (WhatsApp Green) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FiMessageCircle size={22} />
      </button>

      {/* CHAT BOX */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col">

          {/* HEADER */}
          <div className="bg-green-500 p-3 flex justify-between items-center">
            <div>
              <h3 className="text-white font-semibold">WhatsApp Support</h3>
              <p className="text-xs text-white/80">We reply instantly</p>
            </div>

            <button onClick={() => setOpen(false)}>
              <FiX className="text-white" />
            </button>
          </div>

          {/* CHAT AREA */}
          <div className="p-3 h-64 overflow-y-auto space-y-2 bg-slate-50">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] text-sm ${
                  msg.type === "user"
                    ? "bg-green-500 text-white ml-auto"
                    : "bg-white border border-slate-200"
                }`}
              >
                {msg.text}
              </div>
            ))}

            <div ref={chatEndRef} />
          </div>

          {/* INPUT AREA (FIXED INSIDE CARD) */}
          <div className="p-3 border-t flex gap-2 bg-white">

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type message..."
              className="flex-1 bg-slate-100 p-2 rounded-lg outline-none text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-lg text-sm"
            >
              Send
            </button>

          </div>

        </div>
      )}
    </>
  );
}