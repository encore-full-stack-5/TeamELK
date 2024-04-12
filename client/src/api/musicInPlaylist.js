export const musicInPlaylist = async (id) => {
  const res = await api(`/playlist/${id}`, "get");

  return res;
};

export const createMusicInPlaylist = async (date) => {
  const res = await api("/playlist/add", "post");

  return res;
};
