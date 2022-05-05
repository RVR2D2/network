import React from "react";
import { useDispatch } from "react-redux";
import {
  startMessagesListeningThunk,
  stopMessagesListeningThunk,
} from "../../redux/chat-reducer";

import ChatMessages from "./ChatMessages";
import ChatMessageForm from "./ChatMessageForm";

const Chat: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(startMessagesListeningThunk());
    return () => {
      dispatch(stopMessagesListeningThunk());
    };
  }, []);

  return (
    <div>
      <ChatMessages />
      <ChatMessageForm />
    </div>
  );
};

export default Chat;
