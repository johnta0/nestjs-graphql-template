import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CatsArgs {
  @Field((_type) => Int)
  skip = 0;

  @Field((_type) => Int)
  take = 25;
}
