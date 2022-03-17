import React from "react";
import { Field } from "redux-form";
import Button from "../../Button";

const PostFrom = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          name="newPostText"
          component="textarea"
          placeholder="Send Post..."
        />
        <Button text="Send" />
      </form>
    </div>
  );
};

export default PostFrom;
