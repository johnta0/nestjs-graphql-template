import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join('schema.gql'),
      sortSchema: true,
      playground: true,
      introspection: true, // *caution* : set this to false on production
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {}
