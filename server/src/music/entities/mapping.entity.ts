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

  @ManyToOne(() => MusicEntity, (musicEntity) => musicEntity.mappings, {
    onDelete: 'CASCADE',
  })
  music: MusicEntity;

  @ManyToOne(
    () => PlaylistEntity,
    (playlistEntity) => playlistEntity.mappings,
    {
      onDelete: 'CASCADE',
    },
  )
  playlist: PlaylistEntity;
}
