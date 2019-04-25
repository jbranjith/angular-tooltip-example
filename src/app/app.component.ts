import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tooltip Example';
  tooltipText = "Welcome to Angular! Angular helps you build modern applications for the web, mobile, or desktop." ;
  //This guide shows you how to build and run a simple Angular app. You'll use the Angular CLI tool to accelerate development, while adhering to the Style Guide recommendations that benefit every Angular project.";
  dataText = "Show Tooltip";
}
