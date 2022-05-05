import React from "react";
import { useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { AppStateType } from "../../redux/redux-store";

const ChatMessages: React.FC = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);

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
