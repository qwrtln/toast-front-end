import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { Title } from '@angular/platform-browser';

import * as questions from './content.faq.json';

@Component({
  selector: 'pages-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [fadeInAnimation]
})

export class FaqComponent implements OnInit {

  questions = questions;

  constructor(private titleService: Title) {}

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit() {
    this.titleService.setTitle('Pytania - Toastmasters Students Kraków');
  }
}

