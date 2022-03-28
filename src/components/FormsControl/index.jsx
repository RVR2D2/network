import React from "react";
import s from "./style.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      {children}
      {hasError && <h4>{error}</h4>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (placeholder, name, validators, type, component) => {
  return (
    <Field
      name={name}
      component={component}
      validate={validators}
      type={type}
      placeholder={placeholder}
    />
  );
};
