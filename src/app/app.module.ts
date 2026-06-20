import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsModule } from 'src/concepts/concepts.module';
import { AutoConceptsModule } from 'src/auto-concepts/auto-concepts.module';

@Module({
  imports: [ConceptsModule, AutoConceptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
