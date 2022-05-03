import React from "react";
import { Button } from "antd";
import { ws } from "utils/socket";

const ChatMessageForm: React.FC = () => {
  const [message, setMessage] = React.useState("");

  const sendMessageHandler = () => {
    if (!message) {
      return;
    }
    ws.send(message);
    setMessage("");
  };

  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        ></textarea>
      </div>
      <div>
        <Button onClick={sendMessageHandler}>Send</Button>
      </div>
    </div>
  );
};

export default ChatMessageForm;
