import { Controller, Get } from '@nestjs/common';

@Controller('auto-concepts')
export class AutoConceptsController {
  @Get()
  home(): string {
    return 'Welcome to the Auto Concepts Module!';
  }
}
