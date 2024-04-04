import { api } from "../config/network";

export const register = async (data) => {
  const res = await api("/user", "post", data);

  return res;
};

export const login = async (data) => {
  const res = await api("/user/:id", "Get", data);

  return res;
};
