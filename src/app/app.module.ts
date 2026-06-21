import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsModule } from 'src/concepts/concepts.module';
import { AutoConceptsModule } from 'src/auto-concepts/auto-concepts.module';
import { MessageModule } from 'src/message/message.module';

@Module({
  imports: [ConceptsModule, AutoConceptsModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
