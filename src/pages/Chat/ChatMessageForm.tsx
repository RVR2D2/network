import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { sendMessagesThunk } from "../../redux/chat-reducer";

const ChatMessageForm: React.FC = () => {
  const [message, setMessage] = React.useState("");

  const dispatch = useDispatch();

  const sendMessageHandler = () => {
    if (!message) {
      return;
    }
    dispatch(sendMessagesThunk(message));
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
