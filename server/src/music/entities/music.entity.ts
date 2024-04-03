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

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  // @OneToMany(() => MappingEntity, (mappingEntity) => mappingEntity.music)
  // mappings: MappingEntity[];
}
