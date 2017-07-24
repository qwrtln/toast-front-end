import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations/fade-in.animation';

@Component({
  selector: 'core-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [fadeInAnimation]
})

export class FooterComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

}
