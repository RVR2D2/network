import React from "react";
import Avatar from "antd/lib/avatar/avatar";
import { ChatMessageType } from "./ChatMessages";

const ChatMessage: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div>
      <Avatar
        src={message.photo}
        style={{ marginRight: "10px", width: "50px", height: "50px" }}
      />
      <b>{message.userName}</b>
      <p>{message.message}</p>
      <hr />
    </div>
  );
};

export default ChatMessage;
