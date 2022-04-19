import React from "react";
// @ts-ignore
import s from "./style.module.css";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../utils/validators";

type FormControlPropsType = {
  meta: WrappedFieldMetaProps;
};

const FormControl: React.FC<FormControlPropsType> = ({
  meta: { touched, error },
  children,
}) => {
  const hasError = touched && error;

  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      {children}
      {hasError && <h4>{error}</h4>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export function createField<FormKeyType extends string>(
  placeholder: string | undefined,
  name: FormKeyType,
  validators: Array<FieldValidatorType>,
  type: string,
  component: React.FC<WrappedFieldProps>
) {
  return (
    <Field
      name={name}
      component={component}
      validate={validators}
      type={type}
      placeholder={placeholder}
    />
  );
}

export type GetStringKeys<T> = Extract<keyof T, string>;
