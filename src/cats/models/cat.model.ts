import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cat' })
export class Cat {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => String)
  name: string;
}
