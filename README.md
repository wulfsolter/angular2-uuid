# THIS PROJECT IS NOT MAINTAINED #
# USE AT YOUR OWN RISK #

# angular2-uuid
Angular 2 UUID generator.
Uses crypto-secure PRNG window.crypto.getRandomValues() if available, otherwise fallback to Math.random();

## Install
`npm install angular2-uuid --save`

## Use
Include in Angular2 / Ionic2 project with
```
import { UuidService } from 'angular2-uuid';
...
constructor(private uuid: UuidService) { ... }
...
const uuid = this.uuid.generate();
```
