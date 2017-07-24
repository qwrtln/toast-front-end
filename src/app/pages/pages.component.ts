import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { fadeInAnimation } from '../animations/fade-in.animation';

@Component({
  selector: 'pages-root',
  template: '<router-outlet></router-outlet>',
  animations: [fadeInAnimation]
})

export class PagesComponent implements OnInit {
  constructor(private router: Router, @Inject(DOCUMENT) private document) {}

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit(): void {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.router.parseUrl(this.router.url))
      .filter(navigationTree => !navigationTree.fragment) // not anchor link
      .subscribe(navigationTree => {
        this.document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    );
  }
}

