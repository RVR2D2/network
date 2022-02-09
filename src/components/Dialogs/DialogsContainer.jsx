import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/reducers/dialog-reducer";
import Dialogs from "./index";

const DialogsContainer = ({ store }) => {
  let state = store.getState().dialogsPage;

  const handleClick = () => {
    store.dispatch(sendMessageCreator());
  };

  const onMessageChange = (body) => {
    store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onMessageChange}
      sendMessage={handleClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
