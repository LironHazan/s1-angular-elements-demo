import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {createCustomElement} from '@angular/elements';
import {SillyButtonComponent} from './silly-btn/silly-button.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    SillyButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [SillyButtonComponent]
})

export class SillyButtonModule {
  constructor(injector: Injector) {
    const sillyBtn = createCustomElement(SillyButtonComponent, { injector });
    customElements.define('silly-btn', sillyBtn);
  }

  ngDoBootstrap() {
  }
}
