import { Module } from '@nestjs/common/decorators';
import { PeopleController } from './controllers/people.controller';
import { PeopleService } from './services/people.service';

const services = [PeopleService];

const _controllers = [PeopleController];

const _providers = [...services];

const _exports = [...services];

@Module({
  imports: [],
  providers: _providers,
  exports: _exports,
  controllers: _controllers,
})
export class PeopleModule {}
