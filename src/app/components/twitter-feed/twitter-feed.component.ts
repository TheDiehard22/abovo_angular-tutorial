import { Component, OnInit } from '@angular/core';
import { TwitterCard } from '../reuse/twitter-card/twitter-post.model';
import { TwitterService } from 'src/app/services/twitter.service';
import { AlertService } from './../../shared/services/alert.service';
import { Alert, AlertType } from 'src/app/shared/services/alert.model';

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
    this.alertService.showAlert(
      new Alert({
        alertId: '1asd123',
        message: 'message from je mama',
        type: AlertType.Success,
        keepAfterRouteChange: true,
      }),
    );
  }
}
