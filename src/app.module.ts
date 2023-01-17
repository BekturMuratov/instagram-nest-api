import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PhotosModule } from './photos/photos.module';
import { VideosModule } from './videos/videos.module';
import { StoriesModule } from './stories/stories.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [UserModule, PhotosModule, VideosModule, StoriesModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
