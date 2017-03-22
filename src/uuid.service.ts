import { UUID } from './uuid';

import { Injectable } from '@angular/core';

@Injectable()
export class UuidService {

  public generate(): string {
    return UUID.UUID();
  }
}
