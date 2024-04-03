import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MusicEntity } from './music.entity';
import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';

@Entity()
export class MappingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => MusicEntity, (musicEntity) => musicEntity.mappings)
  // music: MusicEntity;

  // @ManyToOne(() => PlaylistEntity, (playlistEntity) => playlistEntity.mappings)
  // playlist: PlaylistEntity;
}
