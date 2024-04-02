import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from './search/search.module';
import { UserModule } from './user/user.module';

import { PlaylistModule } from './playlist/playlist.module';
// import { MusicController } from './music/music.controller';
import { MusicModule } from './music/music.module';
import { MusicEntity } from './music/entities/music.entity'; // 임포트 추가

@Module({
  imports: [
    SearchModule,
    UserModule,
    PlaylistModule,
    MusicModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'welon',
      entities: [MusicEntity],
      synchronize: true, // 동기화 여부. 개발 환경에서만 사용하세요.
    }),
  ],
})
export class AppModule {}
