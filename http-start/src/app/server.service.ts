import { Injectable } from '@angular/core';
// import {Http} from "@angular/http";
// import {HttpClient} from '@angular/common/http';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  firebaseURL = 'https://udemy-ng-http-ad0cd.firebaseio.com/';
  appNameURL = 'https://udemy-ng-http-ad0cd.firebaseio.com/appName.json';

  constructor(private http: Http) {

  }

  storeServers(servers: any[]) {
    const headers = new Headers({
      'content-type': 'application/json'
    });
    // return this.http.post(this.firebaseURL, servers, {headers: headers});
    return this.http.put(this.firebaseURL, servers, {headers: headers});
  }


  getServers() {
    return this.http.get(this.firebaseURL)
      .map(
        (response: Response) => {
          const data = response.json();
          for (let server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          // console.log(error);
          return Observable.throw('something went wrong, please try again');
        }
      );
  }

  getAppName() {
   return this.http.get(this.appNameURL)
     .map(
       (response: Response) => {
         return response.json();
       }
     )
  }

}
