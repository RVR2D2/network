import React from "react";
import { InjectedFormProps } from "redux-form";
import Button from "../../Button";
import { maxLengthCreator, required } from "../../../utils/validators";
import { createField, GetStringKeys, Textarea } from "../../FormsControl";

const maxLength20 = maxLengthCreator(20);

type PropsType = {};
export type AddPostValuesType = {
  newPostText: string;
};

type AddPostValuesTypeKeys = GetStringKeys<AddPostValuesType>;

const PostFrom: React.FC<
  InjectedFormProps<AddPostValuesType, PropsType> & PropsType
> = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        {createField<AddPostValuesTypeKeys>(
          "Send Post..",
          "newPostText",
          [required, maxLength20],
          "text",
          Textarea
        )}
        <Button text="Send" onClick={() => {}} disabled />
      </form>
    </div>
  );
};

export default PostFrom;
