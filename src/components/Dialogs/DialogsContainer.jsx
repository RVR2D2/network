import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/reducers/dialog-reducer";
import Dialogs from "./index";
import StoreContext from "../../context/StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        const handleClick = () => {
          store.dispatch(sendMessageCreator());
        };

        const onMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return <Dialogs
          updateNewMessageBody={onMessageChange}
          sendMessage={handleClick}
          dialogsPage={state}
        />
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
