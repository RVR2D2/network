import React from "react";
import ChatMessages from "./ChatMessages";
import ChatMessageForm from "./ChatMessageForm";

const Chat: React.FC = () => {
  return (
    <div>
      <ChatMessages />
      <ChatMessageForm />
    </div>
  );
};

export default Chat;
