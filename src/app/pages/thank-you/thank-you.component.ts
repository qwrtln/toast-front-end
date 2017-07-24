import { Component, OnInit, HostBinding } from '@angular/core';
import { FacebookService } from '../../services/facebook.service';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pages-thank-you',
  templateUrl: 'thank-you.component.html',
  styleUrls: ['thank-you.component.css'],
  animations: [fadeInAnimation]
})

export class ThankYouComponent implements OnInit {

  public nextEvent: any;

  constructor(private facebookService: FacebookService, private titleService: Title) {}

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit() {
    this.loadContent(this.nextEvent);
    this.titleService.setTitle('Dziękujemy - Toastmasters Students Kraków');
  }

  private loadContent(event: Event) {
    this.facebookService.getLastEvent().subscribe(
      response => {
        this.nextEvent = response;
      },
      error => console.error(error)
    );
  }
}
