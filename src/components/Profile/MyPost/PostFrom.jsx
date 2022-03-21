import React from "react";
import { Field } from "redux-form";
import Button from "../../Button";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../FormsControl";

const maxLength20 = maxLengthCreator(20);

const PostFrom = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder="Send Post..."
          validate={[required, maxLength20]}
        />
        <Button text="Send" />
      </form>
    </div>
  );
};

export default PostFrom;
