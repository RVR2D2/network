import { ResultCodesEnum, ResultCodesWithCaptcha } from "../../api/api";
import { FormAction, stopSubmit } from "redux-form";
import { authApi } from "../../api/auth-api";
import { securityApi } from "../../api/security-api";
import { BaseThunkType, InferActionsTypes } from "../redux-store";

let initialState: InitialStateType = {
  id: null as number | null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "auth/SET_USER_DATA":
    case "auth/GET_CAPTCHA_URL":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "auth/SET_USER_DATA",
      payload: { userId, email, login, isAuth },
    } as const),
  getCaptchaUrl: (captchaUrl: string) =>
    ({
      type: "auth/GET_CAPTCHA_URL",
      payload: {
        captchaUrl,
      },
    } as const),
};

export const authMeThunk = (): ThunkType => async (dispatch) => {
  let meData = await authApi.authMe();
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, email, login } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};
export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null
  ): ThunkType =>
  async (dispatch) => {
    let loginData = await authApi.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
      dispatch(authMeThunk());
    } else {
      if (loginData.resultCode === ResultCodesWithCaptcha.CaptchaIsRequired) {
        dispatch(getCaptchaThunk());
      }

      let message =
        loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const getCaptchaThunk = () => async (dispatch: any) => {
  let response = await securityApi.getCaptchaUrl();
  const captchaUrl = response.url;
  dispatch(actions.getCaptchaUrl(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = await authApi.logout();
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};
export default authReducer;

export type InitialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;
