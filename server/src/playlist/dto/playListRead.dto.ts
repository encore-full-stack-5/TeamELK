export interface UserDTO {
  id: number;
  name: string;
  nickName: string;
}

export interface PlaylistReadDTO {
  // userId: number;
  id: number;
  name: string;
}

export interface UserPlaylistDTO {
  // user: UserDTO;
  playlist: PlaylistReadDTO[];
}
