import React from "react";
import style from "./style.module.css";

import Button from "../Button";
import { Field, reduxForm } from "redux-form";
import { Input } from "../FormsControl";
import { required } from "../../utils/validators";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div className={style.form}>
          <div>
            <label htmlFor="login">Login</label>
            <Field
              name="login"
              component={Input}
              validate={[required]}
              type="text"
              placeholder="Login..."
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              style={{ marginLeft: "20px" }}
              name="password"
              component={Input}
              validate={[required]}
              type="password"
              placeholder="Password..."
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
