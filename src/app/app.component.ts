import { Component } from '@angular/core';

// Angular templates can either use in file html or URL referencing a html file
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query: string;

  constructor() {
    this.query = 'Barot';
  }
}
