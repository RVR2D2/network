import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {"API-KEY": "a4657a53-fd73-42bf-90fc-cd976b8f6157"}
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(
        `users?page=${currentPage}&count=${pageSize}`
      )
      .then(response => {
        return response.data
      });
  }
}