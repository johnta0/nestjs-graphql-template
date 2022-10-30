import { Injectable } from '@nestjs/common';
import { CatsArgs } from './dto/cats.args';
import { Cat } from './models/cat.model';

@Injectable()
export class CatsService {
  async create() {
    return {} as any;
  }

  async findOneById(_id: string) {
    return {} as any;
  }

  async findAll(_catsArgs: CatsArgs) {
    return [] as Cat[];
  }

  async remove(_id: string) {
    return true;
  }
}
