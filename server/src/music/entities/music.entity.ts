import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MusicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  singer: string;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  lyrics: string;

  @Column()
  createAt: Date;
}
