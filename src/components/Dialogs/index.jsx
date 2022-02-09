import React from "react";
import s from "./style.module.css";
import DialogItem from "./DialogItem";
import DialogMessage from "./DialogMessage";
import TextArea from "../TextArea";
import Button from "../Button";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const handleClick = () => {
    props.sendMessage();
  };

  const onMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <h3>Dialog</h3>
        {state.dialogs &&
          state.dialogs.map((item) => (
            <DialogItem key={item.id} name={item.name} id={item.id} />
          ))}
      </div>
      <div className={s.messages}>
        <h3>Message</h3>
        {state.messages &&
          state.messages.map((item) => (
            <DialogMessage key={item.id} message={item.message} />
          ))}
        <div>
          <TextArea onChange={onMessageChange} value={state.newMessageBody} />
          <Button onClick={handleClick} text="Send" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
