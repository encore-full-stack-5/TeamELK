import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistEntity } from './entities/playlist.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { MappingEntity } from 'src/music/entities/mapping.entity';
import { MusicEntity } from 'src/music/entities/music.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlaylistEntity,
      MusicEntity,
      UserEntity,
      MappingEntity,
    ]),
  ],
  controllers: [PlaylistController],
  providers: [PlaylistService, UserService],
  exports: [PlaylistService],
})
export class PlaylistModule {}
