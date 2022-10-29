import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cat' })
export class Cat {
  @Field((_type) => ID)
  id: string;

  @Directive('@upper')
  name: string;
}
