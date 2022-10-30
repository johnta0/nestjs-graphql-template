import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatsArgs } from './dto/cats.args';
import { Cat } from './models/cat.model';

@Resolver((_of) => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query((_returns) => Cat)
  async cat(@Args('id') id: string) {
    const cat = await this.catsService.findOneById(id);
    if (!cat) {
      throw new NotFoundException(id);
    }
    return cat;
  }

  @Query((_returns) => [Cat])
  cats(@Args() catsArgs: CatsArgs) {
    return this.catsService.findAll(catsArgs);
  }

  @Mutation((_returns) => Boolean)
  async removeCat(@Args('id') id: string) {
    return this.catsService.remove(id);
  }
}
