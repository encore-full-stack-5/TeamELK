import { api } from "../config/network";

export const register = async (data) => {
  const res = await api("/user", "post", data);

  return res;
};

export const login = async (data) => {
  const res = await api("user/login", "post", data);

  return res;
};
