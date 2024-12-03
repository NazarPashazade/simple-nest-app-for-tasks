import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common/decorators';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
