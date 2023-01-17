import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PhotosModule } from './photos/photos.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [UserModule, PhotosModule, VideosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
