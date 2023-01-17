import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class StoriesService {
  constructor(private prisma: PrismaService) {}
  create(createStoryDto: Prisma.StoriesCreateInput) {
    return this.prisma.stories.create({data: createStoryDto});
  }

  findAll() {
    return this.prisma.stories.findMany({
      include: {
        user: true,
      }
    });
  }

  findOne(id: Prisma.StoriesWhereUniqueInput) {
    return this.prisma.stories.findUnique({where: id});
  }

  update(id: Prisma.StoriesWhereUniqueInput, updateStoryDto: Prisma.StoriesUpdateInput) {
    return this.prisma.stories.update({
      where: id,
      data: updateStoryDto
    });
  }

  remove(id: Prisma.StoriesWhereUniqueInput) {
    return this.prisma.stories.delete({
      where: id,
    });
  }
}
