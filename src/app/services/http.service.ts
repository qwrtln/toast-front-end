import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {
  Http, Response, Headers, RequestOptionsArgs, RequestMethod, Request, ResponseContentType,
  RequestOptions
} from '@angular/http';

@Injectable()
export abstract class HttpService {

  protected static extractData(res: Response) {
    const body = res.json();
    return body.data || body;
  }

  protected static handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
  }

  protected static standardJsonHeaders(): Headers {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  constructor() { }

}

