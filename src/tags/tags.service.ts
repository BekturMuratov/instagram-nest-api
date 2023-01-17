import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}
  create(createTagDto: Prisma.TagsCreateInput) {
    return this.prisma.tags.create({data: createTagDto})
  }

  findAll() {
    return this.prisma.tags.findMany();
  }

  findOne(id: Prisma.TagsWhereUniqueInput) {
    return this.prisma.tags.findUnique({
      where: id
    });
  }

  update(id: Prisma.TagsWhereUniqueInput, updateTagDto: Prisma.TagsUpdateInput) {
    return this.prisma.tags.update({
      where: id,
      data: updateTagDto
    });
  }

  remove(id: Prisma.TagsWhereUniqueInput) {
    return this.prisma.tags.delete({
      where: id
    });
  }
}
