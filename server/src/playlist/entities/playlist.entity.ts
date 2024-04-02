import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlaylistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @Column()
  // createAt: Date;

  //   @Column({ name: 'user_id' })
  //   userId: number;
  // @ManyToOne(() => UserEntity, (user) => user.playlists)
  // user: UserEntity;
}
