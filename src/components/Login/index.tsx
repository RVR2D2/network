import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
            {createField<LoginFormValuesTypeKeys>(
              "Login...",
              "email",
              [required],
              "text",
              Input
            )}
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="password">Password</label>
            {createField<LoginFormValuesTypeKeys>(
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
            {createField<LoginFormValuesTypeKeys>(
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
            createField<LoginFormValuesTypeKeys>(
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

export type LoginFormValuesType = {
  captcha: string;
  rememberMe: boolean;
  password: string;
  email: string;
};
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

export const LoginPage: React.FC = () => {
  const captchaUrl = useSelector(
    (state: AppStateType) => state.auth.captchaUrl
  );
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const dispatch = useDispatch();

  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(
      login(
        formData.email,
        formData.password,
        formData.rememberMe,
        formData.captcha
      )
    );
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};
