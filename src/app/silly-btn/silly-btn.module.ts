import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {createCustomElement} from '@angular/elements';
import {SillyButtonComponent} from './silly-btn/silly-button.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [SillyButtonComponent],
  exports: [
    SillyButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  entryComponents: [SillyButtonComponent]
})
export class SillyButtonModule {
  constructor(injector: Injector) {
    const sillyBtn = createCustomElement(SillyButtonComponent, { injector });
    customElements.define('silly-btn', sillyBtn);
  }
}
