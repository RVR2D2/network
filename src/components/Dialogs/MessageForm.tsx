// @ts-ignore
import s from "./style.module.css";
import Button from "../Button";
import { createField, Textarea } from "../FormsControl";
import { maxLengthCreator, required } from "../../utils/validators";
import { NewMessageFormType } from "./index";
import React from "react";
import { InjectedFormProps } from "redux-form";

const maxLength100 = maxLengthCreator(100);

export type NewMessageFormValuesKeys = Extract<
  keyof NewMessageFormType,
  string
>;
type PropsType = {};

const AddMessageForm: React.FC<
  InjectedFormProps<NewMessageFormType, PropsType> & PropsType
> = (props) => {
  return (
    <div className={s.textArea}>
      <form onSubmit={props.handleSubmit}>
        {createField<NewMessageFormValuesKeys>(
          "New message...",
          "newMessageBody",
          [required, maxLength100],
          "text",
          Textarea
        )}
        <Button text="Send" onClick={() => {}} disabled />
      </form>
    </div>
  );
};

export default AddMessageForm;
