import { Module } from '@nestjs/common/decorators';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './modules/people/people.module';

const modules = [ConfigModule.forRoot({ isGlobal: true }), PeopleModule];

const _imports = [...modules];
const _providers = [AppService];
const _controllers = [AppController];

@Module({
  imports: _imports,
  controllers: _controllers,
  providers: _providers,
})
export class AppModule {}
