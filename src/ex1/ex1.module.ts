import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ex1Component } from './ex1.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [Ex1Component],
  exports: [Ex1Component],
  bootstrap: [Ex1Component]
})
export class Ex1Module {}
