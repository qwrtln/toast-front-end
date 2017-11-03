import { Component, HostBinding, OnInit} from '@angular/core';
import { FacebookService } from '../../services/facebook.service';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { TextService } from '../../services/text.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GuestsService } from '../../services/guests.service';


@Component({
  selector: 'pages-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeInAnimation]
})

export class MainComponent implements OnInit {

  public nextEvent: Object;
  public videoLoaded: boolean;

  constructor(private facebookService: FacebookService, private textService: TextService,
              private guestsService: GuestsService, private titleService: Title, private router: Router) {}

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit() {
    this.videoLoaded = false;
    this.titleService.setTitle('Toastmasters Students - Klub Mówców i Liderów w Krakowie');
    if (!this.videoLoaded) {
      this.facebookService.getLastEvent().subscribe(
        response => {
          this.nextEvent = response;
          this.videoLoaded = true;
        },
        error => console.error(error)
      );
    }
  }


  public submitMail(event: Event, email: String) {
    event.preventDefault();

    this.guestsService.submitMail(email)
    .subscribe(
        response => {
          this.router.navigateByUrl('/dziekujemy');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

}

