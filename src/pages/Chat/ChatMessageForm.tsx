import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sendMessagesThunk } from "../../redux/chat-reducer";
import { AppStateType } from "../../redux/redux-store";

const ChatMessageForm: React.FC = () => {
  const [message, setMessage] = React.useState("");

  const dispatch = useDispatch();
  const status = useSelector((state: AppStateType) => state.chat.status);

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
        <Button disabled={status !== "ready"} onClick={sendMessageHandler}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatMessageForm;
