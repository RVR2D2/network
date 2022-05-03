import React from "react";
import ChatMessage from "./ChatMessage";
import { ws } from "../../utils/socket";

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const ChatMessages: React.FC = () => {
  const [messages, setMessages] = React.useState<ChatMessageType[]>([]);

  React.useEffect(() => {
    ws.addEventListener("message", (e) => {
      let newMessage = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessage]);
    });
  }, []);

  const style = {
    height: "550px",
    overflowY: "auto",
  };

  return (
    //@ts-ignore
    <div style={style}>
      {messages.map((m, key) => (
        <ChatMessage key={key} message={m} />
      ))}
    </div>
  );
};

export default ChatMessages;
