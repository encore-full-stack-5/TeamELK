export const musicInPlaylist = async (id) => {
  const res = await api(`/playlist/${id}`, "get");

  return res;
};
