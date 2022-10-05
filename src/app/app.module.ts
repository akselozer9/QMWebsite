import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Ex2Module } from './ex2/ex2.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule, Ex2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
