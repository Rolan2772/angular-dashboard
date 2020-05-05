import { Component } from '@angular/core';
import { MaterialModule } from '@angular-dashboard/material';
import { version } from '../../../../package.json';

@Component({
  selector: 'angular-dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello = 'Hello Angular!';
  version: string = version;

  constructor() {}
}
