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

export const getPlaylist = async (data) => {
  const res = await api("user/playlist/" + data, "get");
  return res;
};

export const getMusicInPlaylist = async (data) => {
  const res = await api("playlist/playlist/" + data, "get");
  return res;
};

export const addMusicInPlaylist = async (data) => {
  const res = await api("playlist/add", "post", data);
  return res;
};

export const delMusicInPlaylist = async (playlistId, musicId) => {
  const res = await api(`playlist/del/${playlistId}/${musicId}`, "delete");
  return res;
};
