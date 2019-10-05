import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {SillyButtonModule} from './app/silly-button.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(SillyButtonModule)
  .catch(err => console.error(err));
