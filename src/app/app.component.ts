import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vogayes';
  public logued : boolean;

  constructor() {
    if(localStorage.getItem('user')) {
      this.logued = true;
    } else {
      this.logued = false
    }
  }
}
