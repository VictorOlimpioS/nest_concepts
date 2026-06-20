import { Module } from '@nestjs/common';
import { AutoConceptsController } from './auto-concepts.controller';

@Module({
  controllers: [AutoConceptsController],
})
export class AutoConceptsModule {}
