import { Controller, Get } from '@nestjs/common/decorators';
import { PeopleService } from '../services/people.service';

@Controller('api/people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('employed')
  getEmployedPeople() {
    return this.peopleService.getEmployedPeople();
  }
}
