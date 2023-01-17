import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class VideosService {
  constructor(private prisma: PrismaService){}
  create(createVideoDto: Prisma.VideosCreateInput) {
    return this.prisma.videos.create({
      data: createVideoDto
    });
  }

  findAll() {
    return this.prisma.videos.findMany({
      include: {
        user: true,
      }
    });
  }

  findOne(id: Prisma.VideosWhereUniqueInput) {
    return this.prisma.videos.findUnique({where: id});
  }

  update(id: Prisma.VideosWhereUniqueInput, updateVideoDto: Prisma.VideosUpdateInput) {
    return this.prisma.videos.update({
      where: id,
      data: updateVideoDto
    });
  }

  remove(id: Prisma.VideosWhereUniqueInput) {
    return this.prisma.videos.delete({
      where: id,
    });
  }
}
