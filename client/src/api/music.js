import { api } from "../config/network";

export const createMusic = async (data) => {
  const res = await api("/music", "post", data);

  return res;
};
