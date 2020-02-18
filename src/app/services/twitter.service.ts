import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

//TODO: configure in config file
const config = {
  baseUrl: 'https://api.twitter.com',
  consumerKey: '2X7Jcrm6cUdVjTeCJW6bizgYf',
  consumerSecret: 'Rppemmw6eXg2GaC7RYH5JxKXpDDgpPPugsFih6P9iWYxATls2R',
  // INFO: these tokens are used when using the developer twitter account
  // accessToken: '3182504494-90t3KDwLakZV9WA6b98TSfKezCLD7LBdLKu3eM9',
  // tokenSecret: '0j8NkrxTbWl6JoSw1vNJ7j3ZpKvuyxTEv7uhhxBXf6VSy',
  callbackUri: 'http://localhost:4200',
};

export interface OAuthResponse {
  accessToken: string;
  secret: string;
  providerId: string;
  signInMethod: string;
}

//https://auth0.com/authenticate/angular2/twitter/

@Injectable({
  providedIn: 'root',
})
export class TwitterService implements OnInit {
  twitterUser: firebase.User;
  accessToken: string;
  secret: string;
  loggedIn: boolean;
  observer: Observable<firebase.User>;

  constructor(private http: HttpClient, public auth: AngularFireAuth) {
    this.observer = auth.user;
  }

  async signIn() {
    this.auth.auth
      .signInWithPopup(new auth.TwitterAuthProvider())
      .then(data => {
        // this.accessToken = data.credential.accessToken;
        // this.secret = data.credential.secret;
        this.twitterUser = data.user;
        this.loggedIn = true;

        return data;
      });
  }

  getStatuses() {
    console.log('sagh');
    return this.http.get(
      'https://stream.twitter.com/1.1/statuses/filter.json',
      {
        params: new HttpParams()
          .set('oauth_consumer_key', config.consumerKey)
          .set('oauth_token', this.accessToken),
      },
    );
  }

  ngOnInit() {
    this.observer.pipe();
  }

  // requestToken() {
  //   console.log(encodeURI(config.callbackUri));
  //   return this.http
  //     .post<OAuthResponse>(
  //       `${config.baseUrl}/oauth/request_token`,
  //       {
  //         oauth_callback: encodeURI(config.callbackUri),
  //         oauth_consumer_key: config.consumerKey,
  //       },
  //       // {
  //       //   headers: {},
  //       // },
  //     )
  //     .pipe(
  //       catchError(this.handleError),
  //       tap(resData => {
  //         console.log(resData);
  //       }),
  //     );
  // }

  private handleError(): Observable<never> {
    return throwError('Unexpected error occurred.');
  }
}
