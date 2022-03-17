import React from "react";
import s from "./style.module.css";
import DialogItem from "./DialogItem";
import DialogMessage from "./DialogMessage";
import { reduxForm } from "redux-form";
import AddMessageForm from "./MessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const addNewMessageSubmit = (formData) => {
    props.sendMessage(formData.newMessageBody);
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
        <AddMessageFormRedux onSubmit={addNewMessageSubmit} />
      </div>
    </div>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
