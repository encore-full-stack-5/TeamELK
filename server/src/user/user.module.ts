import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PlaylistEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
