import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CatCreateInput) {
    return this.prisma.cat.create({ data });
  }

  async cat(input: Prisma.CatWhereUniqueInput) {
    return this.prisma.cat.findUnique({
      where: input,
    });
  }

  async cats(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CatWhereUniqueInput;
    where?: Prisma.CatWhereInput;
    orderBy?: Prisma.CatOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.cat.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async delete(where: Prisma.CatWhereUniqueInput) {
    return this.prisma.cat.delete({
      where,
    });
  }
}
