import { api } from "../config/network";

export const register = async (data) => {
  const res = await api("/user", "post", data);

  return res;
};

export const login = async (data) => {
  const res = await api("user/login", "post", data);

  return res;
};

export const search = async (data) => {
  const res = await api("elasticsearch/search?title=" + data, "get");

  return res;
};

export const idDuplicate = async (data) => {
  const res = await api("user/" + data, "get");
  return res;
};

export const createPlaylist = async (data) => {
  const res = await api("/playlist", "post", data);
  return res;
};
