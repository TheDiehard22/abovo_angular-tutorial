import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//TODO: configure in config file
const config = {
  baseUrl: 'https://api.twitter.com',
  consumer_key: '2X7Jcrm6cUdVjTeCJW6bizgYf',
  consumer_secret: 'Rppemmw6eXg2GaC7RYH5JxKXpDDgpPPugsFih6P9iWYxATls2R',
  accessToken: '3182504494-90t3KDwLakZV9WA6b98TSfKezCLD7LBdLKu3eM9',
  token_secret: '0j8NkrxTbWl6JoSw1vNJ7j3ZpKvuyxTEv7uhhxBXf6VSy',
  callbackUri: 'http://localhost:4200/callback',
};

@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  constructor(private http: HttpClient) {}

  private authenticate() {
    this.http.post(
      `${config.baseUrl}/oauth/request_token`,
      {},
      {
        headers: {},
      },
    );
  }
  get() {}
}
