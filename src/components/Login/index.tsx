import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/auth-reducer";

// @ts-ignore
import style from "./style.module.css";
// @ts-ignore
import s from "../FormsControl/style.module.css";
import Button from "../Button";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, GetStringKeys, Input } from "../FormsControl";
import { required } from "../../utils/validators";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";

type LoginFormOwnProps = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="Email">Email</label>
            {createField<LoginFormValuesTypesKey>(
              "Login...",
              "email",
              [required],
              "text",
              Input
            )}
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="password">Password</label>
            {createField<LoginFormValuesTypesKey>(
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
            {createField<LoginFormValuesTypesKey>(
              undefined,
              "rememberMe",
              [],
              "checkbox",
              Input
            )}
            <label htmlFor="rememberMe">remember me</label>
          </div>
          {captchaUrl && <img src={captchaUrl} alt="captcha" />}
          {captchaUrl &&
            createField<LoginFormValuesTypesKey>(
              "Symbols",
              "captcha",
              [required],
              "text",
              Input
            )}
          {error && <div className={s.formSummaryError}>{error}</div>}
          <div>
            <Button text="Login" onClick={() => {}} disabled />
          </div>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: "login",
})(LoginForm);

type MapStatePropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};

type MapDispatchPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};

type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type LoginFormValuesTypesKey = GetStringKeys<LoginFormValuesType>;

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({
  login,
  isAuth,
  captchaUrl,
}) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (isAuth) {
    // @ts-ignore
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={style.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

export default connect(
  (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  }),
  { login }
  // @ts-ignore
)(Login);
