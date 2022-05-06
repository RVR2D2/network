import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startMessagesListeningThunk,
  stopMessagesListeningThunk,
} from "../../redux/chat-reducer";

import ChatMessages from "./ChatMessages";
import ChatMessageForm from "./ChatMessageForm";
import { AppStateType } from "../../redux/redux-store";

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: AppStateType) => state.chat.status);

  React.useEffect(() => {
    dispatch(startMessagesListeningThunk());
    return () => {
      dispatch(stopMessagesListeningThunk());
    };
  }, []);

  return (
    <div>
      {/*@ts-ignore*/}
      {status === "error" && alert("Error. Pleas refresh page")}
      <ChatMessages />
      <ChatMessageForm />
    </div>
  );
};

export default Chat;
