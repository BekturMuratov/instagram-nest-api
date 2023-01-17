import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { StoriesController } from './stories.controller';

@Module({
  controllers: [StoriesController],
  providers: [StoriesService, PrismaService]
})
export class StoriesModule {}
