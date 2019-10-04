import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SillyButtonModule} from './silly-btn/silly-btn.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SillyButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
