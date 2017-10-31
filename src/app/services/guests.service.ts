import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { BackendHttpService } from './backend-http.service';
import 'rxjs/add/observable/of';
import {HttpService} from './http.service';

@Injectable()
export class GuestsService extends BackendHttpService {


  constructor(protected http: Http) {
    super();
  }

  public submitMail(email): Observable<any> {
    const endpoint = 'api/submit';
    const body = JSON.stringify({email: email});
    return this.http.post(this.createEndpoint(endpoint), body, {headers: HttpService.standardJsonHeaders()});
  }

}
