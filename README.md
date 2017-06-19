# angular2-uuid-service
Angular 2 UUID generator.
Uses crypto-secure PRNG window.crypto.getRandomValues() if available, otherwise fallback to Math.random();

## Install
`npm install angular2-uuid-service --save`

## Use
Include in Angular2 / Ionic2 project with
```
import { UuidService } from 'angular2-uuid-service';
...
constructor(private uuid: UuidService) { ... }
...
const uuid = this.uuid.generate();
```
