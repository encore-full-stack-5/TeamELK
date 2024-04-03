// import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';
// import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column()
  password: string;

  @Column()
  nickName: string;

  // @OneToMany(() => PlaylistEntity, (playlist) => playlist.user)
  // playlists: PlaylistEntity[];
}
