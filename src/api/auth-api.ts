import {
  instance,
  ResponseType,
  ResultCodesEnum,
  ResultCodesWithCaptcha,
} from "./api";

type authMeResponseDataType = {
  id: number;
  email: string;
  login: string;
};
type loginResponseType = {
  userId: number;
};

export const authApi = {
  authMe() {
    return instance
      .get<ResponseType<authMeResponseDataType>>(`auth/me`)
      .then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instance
      .post<
        ResponseType<
          loginResponseType,
          ResultCodesEnum | ResultCodesWithCaptcha
        >
      >(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
