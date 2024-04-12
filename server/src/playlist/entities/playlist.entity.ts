// import { MappingEntity } from 'src/music/entities/mapping.entity';
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
  constructor(id: number) {
    this.id = id;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  img: string;

  // @Column({ nullable: true })
  // createAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.playlists)
  user: UserEntity;

  @OneToMany(() => MappingEntity, (mappingEntity) => mappingEntity.playlist, {
    cascade: true,
  })
  mappings: MappingEntity[];
}
