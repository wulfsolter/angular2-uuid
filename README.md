# angular2-uuid
Angular 2 UUID generator.
Uses crypto-secure PRNG window.crypto.getRandomValues() if available, otherwise fallback to Math.random();

## Install
`npm install angular2-uuid --save`
include in Angular2 / Ionic2 project with
```
import { UUID } from 'angular2-uuid';
...
let uuid = UUID.UUID();
```
