import { Controller, Get } from '@nestjs/common';
import { AutoConceptsService } from './auto-concepts.service';

@Controller('auto-concepts')
export class AutoConceptsController {
  constructor(private readonly autoConceptsService: AutoConceptsService) {}
  @Get()
  home(): string {
    return this.autoConceptsService.home();
  }
}
