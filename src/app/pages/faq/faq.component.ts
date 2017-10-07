import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { Title } from '@angular/platform-browser';

import * as questions from './content.faq.json';
import {FaqService} from '../../services/faq.service';

@Component({
  selector: 'pages-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [fadeInAnimation]
})

export class FaqComponent implements OnInit {

  displayedQuestions: DisplayedQuestion[] = [];

  constructor(private titleService: Title, private faqService: FaqService) {}

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit() {
    this.titleService.setTitle('Pytania - Toastmasters Students Kraków');
    this.faqService.getQuestions().subscribe(
      response => { this.populateQuestions(response); }
    );
  }

  populateQuestions(questions) {
    for (const question of questions) {
      this.displayedQuestions.push(new DisplayedQuestion(question.question, question.answer, false));
    }
  }
}

class DisplayedQuestion {
  constructor(public question: string, public answer: string, public active: boolean) {}
  toggleActive() {
    this.active = !(this.active);
  }
}

