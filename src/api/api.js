import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "a4657a53-fd73-42bf-90fc-cd976b8f6157" },
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  profile(userId) {
    console.warn("Obsolute method, Please profileApi object.");
    return profileApi.profile(userId);
  },
};

export const profileApi = {
  profile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authApi = {
  authMe() {
    return instance.get(`auth/me`);
  },
};
