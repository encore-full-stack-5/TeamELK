import { Injectable, NotFoundException } from '@nestjs/common';
import { PlaylistEntity } from './entities/playlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MusicByPlaylist, PlaylistReadDTO } from './dto/playListRead.dto';
import { MusicEntity } from 'src/music/entities/music.entity';
import { MusicReadDTO } from 'src/music/dto/musicRead.dto';
import { MappingEntity } from 'src/music/entities/mapping.entity';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(PlaylistEntity)
    private playlistRepository: Repository<PlaylistEntity>,
    @InjectRepository(MusicEntity)
    private musicRepository: Repository<MusicEntity>,
    @InjectRepository(MappingEntity)
    private mappingRepository: Repository<MappingEntity>,
  ) {}

  // 모든 Playlist Read
  async findAll(): Promise<PlaylistReadDTO[]> {
    return this.playlistRepository.find();
  }

  async findOnePlaylist(id: number): Promise<PlaylistReadDTO> {
    const playInfo = await this.playlistRepository.findOneBy({ id });
    return playInfo;
  }

  // Playlist Create
  async createPlaylist(req: PlaylistEntity): Promise<void> {
    const exist = await this.playlistRepository.findOneBy({ name: req.name });
    if (exist) {
      throw new NotFoundException();
    }
    await this.playlistRepository.save(this.playlistRepository.create(req));
  }

  // Playlist Delete
  async deletePlaylist(id: number): Promise<void> {
    await this.playlistRepository.delete(id);
  }

  // Playlist Update
  async updatePlaylist(id: number, req: PlaylistEntity): Promise<void> {
    const playInfo = await this.playlistRepository.findOneBy({ id });
    playInfo.name = req.name;
    playInfo.img = req.img;
    await this.playlistRepository.save(playInfo);
  }

  async recommandMusic(id: number): Promise<any> {}

  // Read Music in Playlist
  async mappingMusicAndPlaylist(playlistId: number): Promise<MusicByPlaylist> {
    const playlistInfo = await this.playlistRepository.findOneBy({
      id: playlistId,
    });
    const musicMappingPlaylist: MappingEntity[] =
      await this.mappingRepository.find({
        relations: {
          playlist: true,
          music: true,
        },
        where: {
          playlist: {
            id: playlistId,
          },
        },
      });

    //select * from MappingEntity
    //join playlist on id = MappingEntity.playlistId
    const musics: MusicReadDTO[] = await this.musicRepository.find({
      relations: {
        mappings: true,
      },
      where: {
        mappings: {
          music: musicMappingPlaylist.map((v) => v.music),
        },
      },
    });

    if (musicMappingPlaylist.length <= 0) {
      throw new NotFoundException();
    }
    // return musicMappingPlaylist;
    const parseMusicAll = musics.map((value) => {
      return {
        id: value.id,
        singer: value.singer,
        title: value.title,
        genre: value.genre,
        lyrics: value.lyrics,
      };
    });

    return {
      playlist: {
        id: playlistInfo.id,
        name: playlistInfo.name,
        img: playlistInfo.img,
      },
      music: parseMusicAll,
    };
  }

  async addMusicToPlaylist(pid: number, mid: number): Promise<void> {
    const musicInfo = new MusicEntity(mid);
    const playlistInfo = new PlaylistEntity(pid);

    const exist = await this.mappingRepository.find({
      relations: {
        playlist: true,
        music: true,
      },
      where: {
        playlist: {
          id: playlistInfo.id,
        },
        music: {
          id: musicInfo.id,
        },
      },
    });
    console.log(exist);
    if (exist.length > 0) {
      throw new Error('이미 있는 곡입니다.');
    }

    await this.mappingRepository.save({
      playlist: playlistInfo,
      music: musicInfo,
    });
  }

  async deleteMusicToPlaylist(
    playlistId: number,
    musicId: number,
  ): Promise<void> {
    const mid = await this.mappingRepository.find({
      relations: {
        playlist: true,
        music: true,
      },
      where: {
        playlist: {
          id: playlistId,
        },
        music: {
          id: musicId,
        },
      },
    });

    if (mid.length > 0) {
      const mappingId = mid[0].id;
      await this.mappingRepository.delete({ id: mappingId });
    } else {
      throw new Error('없는 곡입니다.');
    }
  }
}
