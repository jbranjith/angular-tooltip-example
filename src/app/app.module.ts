import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppDirective } from './app.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AppDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
