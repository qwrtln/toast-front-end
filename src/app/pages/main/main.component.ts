import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { FacebookService } from '../../services/facebook.service';
import { Http, Headers } from '@angular/http';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { TextService } from '../../services/text.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


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
              private http: Http, private titleService: Title, private router: Router) {}

  @HostListener ('window:scroll', ['$event']) loadContent(event) {
    if (!this.videoLoaded) {
      this.videoLoaded = true;
      this.facebookService.getLastEvent().subscribe(
        response => {
          this.nextEvent = response;
        },
        error => console.error(error)
      );
    }
  }

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit() {
    this.videoLoaded = false;
    this.titleService.setTitle('Toastmasters Students - Klub Mówców i Liderów w Krakowie');
  }


  public submitMail(event: Event, email: String) {
    event.preventDefault();

    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    const body = JSON.stringify({email: email});

    this.http.post('http://188.116.52.177:7001/api/submit', body, {headers: contentHeaders})
      .subscribe(
        response => {
          console.log('Ok');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
    console.log(body);
    this.router.navigateByUrl('/dziekujemy');
  }

}

