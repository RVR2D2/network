import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/auth-reducer";

import style from "./style.module.css";
import s from "../FormsControl/style.module.css";
import Button from "../Button";
import { Field, reduxForm } from "redux-form";
import { Input } from "../FormsControl";
import { required } from "../../utils/validators";
import Redirect from "react-router-dom/es/Redirect";

const LoginForm = (props) => {
  return (
    <>
      <form className={style.form} onSubmit={props.handleSubmit}>
        <div>
          <div>
            <label htmlFor="Email">Email</label>
            <Field
              name="email"
              component={Input}
              validate={[required]}
              type="text"
              placeholder="Login..."
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="password">Password</label>
            <Field
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
            <Field name="rememberMe" component="input" type="checkbox" />
            <label htmlFor="rememberMe">remember me</label>
          </div>
          {props.error && (
            <div className={s.formSummaryError}>{props.error}</div>
          )}
          <div>
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

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) return <Redirect to={"/profile"} />;
  return (
    <div className={style.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(
  (state) => ({
    isAuth: state.auth.isAuth,
  }),
  { login }
)(Login);
