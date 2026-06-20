import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsService {
  home(): string {
    return 'Welcome to the Concepts Module!';
  }
}
