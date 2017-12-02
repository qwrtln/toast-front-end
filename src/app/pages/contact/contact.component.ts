import { Component, OnInit, HostBinding } from '@angular/core';
import { FacebookService } from '../../services/facebook.service';
import { Http } from '@angular/http';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pages-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeInAnimation]
})

export class ContactComponent implements OnInit {

  public nextEvent: any;
  location: Marker;

  contact_person = 'toastmastersstudents@gmail.com';

  // google maps zoom level
  zoom = 16;

  // initial center position for the map - AGH locomotive
  lat = 50.067377;
  lng = 19.917461;

  constructor(private facebookService: FacebookService, private http: Http, private titleService: Title) {}

  @HostBinding('@fadeInAnimation') fadeInAnimation() {}

  ngOnInit() {
    this.loadContent(this.nextEvent);
    this.titleService.setTitle('Kontakt - Toastmasters Students Kraków');
  }

  private loadContent(event: Event) {
    this.facebookService.getLastEvent().subscribe(
      response => {
        this.nextEvent = response;
        if (response.place.location) {
          this.setMapMarker(response);
        }
        else {
          this.location = new Marker(
            this.lat,
            this.lng,
            false,
            response.place.name
          );
        }
      },
      error => console.error(error)
    );
  }

  private setMapMarker(response: any) {
    this.location = new Marker(
      response.place.location.latitude,
      response.place.location.longitude,
      false,
      response.place.name
    );
  }
}

// just a class for type safety.
class Marker {
  lat: number;
  lng: number;
  draggable: boolean;
  label?: string;

  constructor(_lat: number, _lng: number, _draggable: boolean, _label?: string) {
    this.lat = _lat;
    this.lng = _lng;
    this.draggable = _draggable;
    this.label = _label;
  }
}
