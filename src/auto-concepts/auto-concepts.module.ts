import { Module } from '@nestjs/common';
import { AutoConceptsController } from './auto-concepts.controller';
import { AutoConceptsService } from './auto-concepts.service';

@Module({
  controllers: [AutoConceptsController],
  providers: [AutoConceptsService],
})
export class AutoConceptsModule {}
