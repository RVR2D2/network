import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "a630bc1a-5d58-4b80-8bbb-2247987438bd" },
});

export const usersApi = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },
  profile(userId: number) {
    console.warn("Obsolute method, Please profileApi object.");
    return profileApi.profile(userId);
  },
};

export const profileApi = {
  profile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile: string) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile: object) {
    return instance.put(`profile`, profile);
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodesWithCaptcha {
  CaptchaIsRequired = 10,
}

type authMeResponseType = {
  data: { id: number; email: string; login: string };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

type loginResponseType = {
  data: { userId: number };
  resultCode: ResultCodesEnum | ResultCodesWithCaptcha;
  messages: Array<string>;
};

export const authApi = {
  authMe() {
    return instance.get<authMeResponseType>(`auth/me`).then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: null | string = null
  ) {
    return instance
      .post<loginResponseType>(`auth/login`, {
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

type getCaptchaUrlResponseType = {
  url: string;
};

export const securityApi = {
  getCaptchaUrl() {
    return instance.get<getCaptchaUrlResponseType>(`security/get-captcha-url`);
  },
};
