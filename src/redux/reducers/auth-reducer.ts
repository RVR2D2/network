import { authApi, securityApi } from "../../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL = "auth/GET_CAPTCHA_URL";

export type InitialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};

let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type setAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: setAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type getCaptchaUrlActionPayloadType = {
  captchaUrl: string;
};

type getCaptchaUrlActionType = {
  type: typeof GET_CAPTCHA_URL;
  payload: getCaptchaUrlActionPayloadType;
};

export const getCaptchaUrl = (captchaUrl: string): getCaptchaUrlActionType => ({
  type: GET_CAPTCHA_URL,
  payload: {
    captchaUrl,
  },
});

export const authMeThunk = () => async (dispatch: any) => {
  let response = await authApi.authMe();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: null) =>
  async (dispatch: any) => {
    let response = await authApi.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(authMeThunk());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaThunk());
      }

      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const getCaptchaThunk = () => async (dispatch: any) => {
  let response = await securityApi.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrl(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = await authApi.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export default authReducer;
