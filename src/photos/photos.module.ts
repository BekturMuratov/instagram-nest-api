import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService, PrismaService]
})
export class PhotosModule {}
