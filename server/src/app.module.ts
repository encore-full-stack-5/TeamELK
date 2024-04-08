import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from './search/search.module';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './playlist/playlist.module';
import { MusicModule } from './music/music.module';
import { MusicEntity } from './music/entities/music.entity'; // 임포트 추가
import { UserEntity } from './user/entities/user.entity';
import { PlaylistEntity } from './playlist/entities/playlist.entity';
import { MappingEntity } from './music/entities/mapping.entity';

@Module({
  imports: [
    SearchModule,
    UserModule,
    PlaylistModule,
    MusicModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.80.11',
      // host: '192.168.80.11',
      port: 3306,
      username: 'buja',
      password: '1234',
      database: 'welon',
      entities: [MusicEntity, UserEntity, PlaylistEntity, MappingEntity],
      synchronize: true, // 동기화 여부. 개발 환경에서만 사용하세요.
      logging: true,
    }),
  ],
})
export class AppModule {}
