import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Ex1Module } from '../ex1/ex1.module';
import { Ex2Module } from '../ex2/ex2.module';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, Ex1Module, Ex2Module],
  declarations: [AppComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
