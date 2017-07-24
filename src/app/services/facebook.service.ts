import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { HttpService } from './http.service';

const authUrl = 'https://graph.facebook.com/oauth/access_token';
const lastPostsUrl = 'https://graph.facebook.com/ToastmastersStudents/events/' +
  '?fields=id,name,description,start_time,place,cover,attending_count,interested_count';

const client_id = '1871522246470173';
const client_secret = '1154257bad8b1cf1995548fbdf7fc483';
const grant_type = 'client_credentials';

@Injectable()
export class FacebookService extends HttpService {

    private access_token: string;

    constructor(protected http: Http) { super(); }

    public getLastEvent(): Observable<any> {
        return this.getEvents().map(list => {
            if (list.length > 0) {
              return list[0];
            } else {
              return null;
            }
        });
    }

    public getEvents(): Observable<any[]> {
        return this.getToken().switchMap(token =>
            this.http.get(lastPostsUrl + '&access_token=' + token)
        ).map((res: Response) => res.json().data);
    }

    public getToken(): Observable<string> {
        const params = new URLSearchParams();
        params.set('client_id', client_id);
        params.set('client_secret', client_secret);
        params.set('grant_type', grant_type);
        return this.http.get(authUrl, {search: params}).map((res: Response) => this.extractToken(res));
    }

    private extractToken(res: Response) {
        return res.json().access_token;
    }

}

