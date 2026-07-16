import { useEffect, useState } from "react";
import { sendMessage, getChatHistory } from "../services/chat.service";

interface ChatMessage {
  _id?: string;
  message: string;
  reply: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Load chat history
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getChatHistory();
        setMessages(res.data.chats);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHistory();
  }, []);

  // Send message
  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);

    try {
      const res = await sendMessage(input);

      if (res.data.chat) {
        setMessages((prev) => [...prev, res.data.chat]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            message: input,
            reply: res.data.reply,
          },
        ]);
      }
      setInput("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[85vh]">
      <h1 className="text-3xl font-bold mb-6">AI Chat</h1>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto border rounded-xl p-5 bg-slate-900 space-y-6">
        {messages.length === 0 && (
          <p className="text-gray-400">Start a conversation with SolaceAI...</p>
        )}

        {messages.map((chat, index) => (
          <div key={chat._id || index}>
            <div className="text-right mb-2">
              <div className="inline-block bg-purple-600 px-4 py-2 rounded-xl">
                {chat.message}
              </div>
            </div>

            <div className="text-left">
              <div className="inline-block bg-slate-700 px-4 py-2 rounded-xl">
                {chat.reply}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-3 mt-5">
        <input
          className="flex-1 border rounded-lg px-4 py-3 bg-slate-800 text-white"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 px-6 rounded-lg">
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chat;
