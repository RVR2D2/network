import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/auth-reducer";

import style from "./style.module.css";
import s from "../FormsControl/style.module.css";
import Button from "../Button";
import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../FormsControl";
import { required } from "../../utils/validators";
import Redirect from "react-router-dom/es/Redirect";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="Email">Email</label>
            {createField("Login...", "email", [required], "text", Input)}
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="password">Password</label>
            {createField(
              "Password...",
              "password",
              [required],
              "password",
              Input
            )}
          </div>
        </div>
        <div className={style.formControl}>
          <div style={{ display: "flex", alignItems: "first baseline" }}>
            {createField(null, "rememberMe", null, "checkbox", Input)}
            <label htmlFor="rememberMe">remember me</label>
          </div>
          {error && <div className={s.formSummaryError}>{error}</div>}
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

const Login = ({ login, isAuth }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  };

  if (isAuth) return <Redirect to={"/profile"} />;
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
