import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pipes';
  birthday: Date = new Date(1990, 10, 21);
  name: string = 'steve kindstrand'
}