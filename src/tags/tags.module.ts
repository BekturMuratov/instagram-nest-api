import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';

@Module({
  controllers: [TagsController],
  providers: [TagsService, PrismaService]
})
export class TagsModule {}
