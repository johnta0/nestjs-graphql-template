import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';

@Module({
  imports: [],
  providers: [CatsResolver, CatsService, PrismaService],
  exports: [CatsService],
})
export class CatsModule {}
