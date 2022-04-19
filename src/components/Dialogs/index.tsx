import React from "react";
// @ts-ignore
import s from "./style.module.css";
import DialogItem from "./DialogItem";
import DialogMessage from "./DialogMessage";
import { reduxForm } from "redux-form";
import AddMessageForm, { NewMessageFormValuesKeys } from "./MessageForm";
import { InitialStateType } from "../../redux/reducers/dialog-reducer";

type PropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};

export type NewMessageFormType = {
  newMessageBody: string;
};

const Dialogs: React.FC<PropsType> = (props) => {
  let state = props.dialogsPage;

  const addNewMessageSubmit = (formData: NewMessageFormType) => {
    props.sendMessage(formData.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      {/* @ts-ignore*/}
      <div className={s.dialogsItems}>
        <h3>Dialog</h3>
        {state.dialogs &&
          state.dialogs.map((item: object) => (
            // @ts-ignore
            <DialogItem key={item.id} name={item.name} id={item.id} />
          ))}
      </div>
      {/* @ts-ignore*/}
      <div className={s.messages}>
        <h3>Message</h3>
        {state.messages &&
          state.messages.map((item) => (
            // @ts-ignore
            <DialogMessage key={item.id} message={item.message} />
          ))}
        <AddMessageFormRedux onSubmit={addNewMessageSubmit} />
      </div>
    </div>
  );
};

const AddMessageFormRedux = reduxForm<NewMessageFormValuesKeys, any>({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
