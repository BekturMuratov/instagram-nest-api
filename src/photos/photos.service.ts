import { PrismaService } from './../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotosService {
  constructor(private prisma: PrismaService) {}
  create(createPhotoDto: Prisma.PhotosCreateInput) {
    return this.prisma.photos.create({data: createPhotoDto});
  }

  findAll() {
    return this.prisma.photos.findMany({
      include: {
        user: true,
      }
    });
  }

  findOne(id: Prisma.PhotosWhereUniqueInput) {
    return this.prisma.photos.findUnique({
      where: id,
      include: {
        user: true,
      }
    },);
  }

  update(id: Prisma.PhotosWhereUniqueInput, updatePhotoDto: UpdatePhotoDto) {
    return this.prisma.photos.update({
      where: id,
      data: updatePhotoDto
    });
  }

  remove(id: Prisma.PhotosWhereUniqueInput) {
    return this.prisma.photos.delete({
      where: id,
    });
  }
}
