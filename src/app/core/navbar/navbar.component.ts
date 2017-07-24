import { Component, OnInit, HostListener, trigger, transition, style, animate } from '@angular/core';
import { Router } from '@angular/router';

import * as data from './links.navbar.json';

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger(
      'slideInOut',
      [
        transition(
          ':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('150ms', style({transform: 'translateY(0)'}))
          ]
        ),
        transition(
          ':leave', [
            style({transform: 'translateY(0)'}),
            animate('150ms', style({transform: 'translateY(-100%)'}))
          ]
        )
      ]
    )
  ]
})

export class NavbarComponent implements OnInit {

  isScrolled = false;
  scrolledUp = true;
  isCollapsed = true;
  isSmall: boolean;

  navbar_links = data;
  smallLimit = 768;

  currentPosition = 0;
  changePositionLimit = 1;

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe(
      (url) => {
        this.checkIfScrolled();
        this.isSmall = this.smallLimit > window.innerWidth;
      }
    );
  }

  @HostListener('window:resize', ['$event']) updateScreenSize(event) {
    this.isSmall = this.smallLimit > window.innerWidth;
    this.checkIfScrolled();
  }
  @HostListener('window:scroll', ['$event']) onWindowScroll(event) {
    const previousPosition = this.currentPosition;
    this.currentPosition = (window.pageYOffset || event.target.scrollTop) - (event.target.clientTop || 0);
    this.scrolledUp = this.scrolledUp ? (this.currentPosition - 10) < previousPosition : (this.currentPosition + 10) < previousPosition;
    this.checkIfScrolled();
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  checkIfScrolled() {
    this.isScrolled = this.currentPosition >= this.changePositionLimit;
  }

}


