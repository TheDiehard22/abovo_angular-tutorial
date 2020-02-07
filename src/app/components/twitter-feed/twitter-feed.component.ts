import { Component, OnInit } from '@angular/core';
import { TwitterCard } from '../reuse/twitter-card/twitter-post.model';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {
  twitterCards: TwitterCard[] = [
    new TwitterCard('https://via.placeholder.com/100', '123123123', '@iamdevloper', new Date(), 'Every developer: we need to implement an email alert system to notify us if production crashes Every developer after the first crash: how do we turn off these email alerts?'),
    new TwitterCard('https://via.placeholder.com/100', '123123123', '@iamdevloper', new Date(), 'Every developer: we need to implement an email alert system to notify us if production crashes Every developer after the first crash: how do we turn off these email alerts?')
  ];

  constructor() { }

  ngOnInit() {
  }

}
