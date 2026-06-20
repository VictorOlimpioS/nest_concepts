import { Injectable } from '@nestjs/common';

@Injectable()
export class AutoConceptsService {
  home(): string {
    return 'Welcome to the Auto Concepts Module!';
  }
}
