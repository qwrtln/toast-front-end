import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() img: string;
  @Input() page: string;

  @ViewChild('shared-header') header: any;

  style = {
    'background': '',
    'background-size': 'cover'
  };

  constructor() {}
  ngOnInit() {
    this.style.background =  'url(/assets/images/' + this.img + ') no-repeat center center';
  }

}

