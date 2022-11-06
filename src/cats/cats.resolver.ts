import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatsArgs } from './dto/cats.args';
import { Cat } from './models/cat.model';

@Resolver((_of) => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query((_returns) => [Cat])
  async cats(@Args() catsArgs: CatsArgs) {
    const { skip, take } = catsArgs;
    return this.catsService.cats({
      skip,
      take,
    });
  }

  @Mutation((_returns) => Cat)
  async createCat(@Args('name') name: string) {
    return this.catsService.create({ name });
  }

  @Mutation((_returns) => Boolean)
  async removeCat(@Args('id') id: number) {
    return this.catsService.delete({ id });
  }
}
