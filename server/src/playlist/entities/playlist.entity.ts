import { MappingEntity } from 'src/music/entities/mapping.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { OneToMany } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlaylistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @Column({ nullable: true })
  // createAt: Date;

  //   @Column({ name: 'user_id' })
  //   userId: number;
  // @ManyToOne(() => UserEntity, (user) => user.playlists)
  // user: UserEntity;

  // @OneToMany(
  //   () => MappingEntity,
  //   (mappingEntity) => mappingEntity.PlaylistEntity,
  // )
  // mappings: MappingEntity[];
}
