import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MappingEntity } from './mapping.entity';

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

  // @OneToMany(() => MappingEntity, (mappingEntity) => mappingEntity.music)
  // mappings: MappingEntity[];
}
