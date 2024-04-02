import { MappingEntity } from 'src/music/entities/mapping.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PlaylistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createAt: Date;

  //   @Column({ name: 'user_id' })
  //   userId: number;
  @ManyToOne(() => UserEntity, (user) => user.playlists)
  user: UserEntity;

  @OneToMany(() => MappingEntity, (mappingEntity) => mappingEntity.playlist)
  mappings: MappingEntity[];
}
