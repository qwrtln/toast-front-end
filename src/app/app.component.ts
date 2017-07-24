import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<core-navbar></core-navbar><pages-root></pages-root><core-footer></core-footer>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {}

}

