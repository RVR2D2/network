import s from "./style.module.css";
import { Field } from "redux-form";
import Button from "../Button";
import React from "react";
import { Textarea } from "../FormsControl";
import { maxLengthCreator, required } from "../../utils/validators";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <div className={s.textArea}>
      <form onSubmit={props.handleSubmit}>
        <Field
          name="newMessageBody"
          component={Textarea}
          validate={[required, maxLength100]}
          placeholder="New message"
        />
        <Button text="Send" />
      </form>
    </div>
  );
};

export default AddMessageForm;
