import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({data: createUserDto});
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        photos: true,
      }
    });
  }

  findOne(id: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: id,
      include: {
        photos: true,
      }
    });
  }

  findByUsername(where: {username: string}) {
    return this.prisma.user.findUnique({
      where: {
        username: where.username
      }
    })
  }

  update(id: Prisma.UserWhereUniqueInput, updateUserDto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: id,
      data: updateUserDto
    });
  }

  remove(id: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where: id
    });
  }
}
