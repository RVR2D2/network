import React from "react";
import ChatMessage from "./ChatMessage";

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const ChatMessages: React.FC<{ ws: WebSocket | null }> = ({ ws }) => {
  const [messages, setMessages] = React.useState<ChatMessageType[]>([]);

  React.useEffect(() => {
    let messagesHandler = (e: MessageEvent) => {
      let newMessage = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessage]);
    };
    ws?.addEventListener("message", messagesHandler);

    return () => {
      ws?.removeEventListener("message", messagesHandler);
    };
  }, [ws]);

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
