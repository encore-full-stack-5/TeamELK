import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MusicEntity {
  constructor(id: number) {
    this.id = id;
  }
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

  @OneToMany(() => MappingEntity, (mappingEntity) => mappingEntity.music)
  mappings: MappingEntity[];
}
