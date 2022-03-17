import React from "react";
import style from "./style.module.css";

import Button from "../Button";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className={style.form}>
          <div>
            <label htmlFor="login">Login</label>
            <Field
              name="login"
              component="input"
              type="text"
              placeholder="Typing..."
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              style={{ marginLeft: "20px" }}
              name="password"
              component="input"
              type="password"
              placeholder="Typing..."
            />
          </div>
        </div>
        <div className={style.formControl}>
          <div>
            <label htmlFor="rememberMe">remember me</label>
            <Field name="rememberMe" component="input" type="checkbox" />
          </div>
          <div style={{ marginLeft: "160px" }}>
            <Button text="Login" />
          </div>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={style.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
