import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/auth-reducer";

import style from "./style.module.css";
import s from "../FormsControl/style.module.css";
import Button from "../Button";
import { reduxForm } from "redux-form";
import { createField, Input } from "../FormsControl";
import { required } from "../../utils/validators";
import Redirect from "react-router-dom/es/Redirect";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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
          {captchaUrl && <img src={captchaUrl} alt="captcha" />}
          {captchaUrl &&
            createField("Symbols", "captcha", [required], "text", Input)}
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

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth) return <Redirect to={"/profile"} />;
  return (
    <div className={style.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

export default connect(
  (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  }),
  { login }
)(Login);
