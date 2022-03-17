import s from "./style.module.css";
import { Field } from "redux-form";
import Button from "../Button";
import React from "react";

const AddMessageForm = (props) => {
  return (
    <div className={s.textArea}>
      <form onSubmit={props.handleSubmit}>
        <Field name="newMessageBody" component="textarea" />
        <Button text="Send" />
      </form>
    </div>
  );
};

export default AddMessageForm;
