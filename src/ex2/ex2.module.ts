import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ex2Component } from './ex2.component';
import { Ex2Directive } from './ex2.directive';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [Ex2Component, Ex2Directive],
  exports: [Ex2Component],
  bootstrap: [Ex2Component]
})
export class Ex2Module { }
