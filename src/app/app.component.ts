import { Component } from '@angular/core';
import { javascriptCallback } from './javascript-callback.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

// Call the function so it will be executed
javascriptCallback();
