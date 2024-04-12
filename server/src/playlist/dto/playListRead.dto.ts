import { MusicReadDTO } from 'src/music/dto/musicRead.dto';

export interface UserDTO {
  id: number;
  uid: string;
  nickName: string;
}

export interface PlaylistReadDTO {
  // userId: number;
  id: number;
  name: string;
  img: string;
}

export interface UserPlaylistDTO {
  user: UserDTO;
  playlist: PlaylistReadDTO[];
}

export interface MusicByPlaylist {
  playlist: PlaylistReadDTO;
  music: MusicReadDTO[];
}
