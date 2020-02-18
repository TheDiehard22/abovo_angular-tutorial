import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TwitterCard } from '../reuse/twitter-card/twitter-post.model';
import { TwitterService } from 'src/app/services/twitter.service';
import { AlertService } from './../../shared/services/alert.service';

import * as fromApp from '../../store/app.reducer';
import * as fromAlertActions from './../../shared/alert/store/alert.actions';
import { Alert, AlertType } from '../../shared/alert/alert.model';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css'],
})
export class TwitterFeedComponent {
  twitterCards: TwitterCard[] = [
    new TwitterCard(
      'https://via.placeholder.com/100',
      '123123123',
      '@iamdevloper',
      new Date(),
      'Every developer: we need to implement an email alert system to notify us if production crashes Every developer after the first crash: how do we turn off these email alerts?',
    ),
  ];

  constructor(
    private twitter: TwitterService,
    private alertService: AlertService,
    private store: Store<fromApp.AppState>,
  ) {}

  onClick(): void {
    this.twitter.signIn().then(data => {
      console.log(data);
    });
  }

  getFeed(): void {
    this.twitter.getStatuses().subscribe(data => {
      console.log('subscribe', data);
    });
  }

  showNotification(): void {
    this.store.dispatch(
      new fromAlertActions.AddAlert(
        new Alert({
          message: 'asd',
          type: AlertType.Success,
          alertId: '1',
          timestamp: new Date(),
          keepAfterRouteChange: true,
        }),
      ),
    );
  }
}
