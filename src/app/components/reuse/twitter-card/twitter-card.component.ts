import { Component, OnInit, Input } from '@angular/core';
import { TwitterCard } from './twitter-post.model';

@Component({
  selector: 'base-twitter-card',
  templateUrl: './twitter-card.component.html',
  styleUrls: ['./twitter-card.component.css'],
  host: { class: 'mb-4' }
})
export class TwitterCardComponent implements OnInit {
  @Input() data: TwitterCard

  constructor() { }

  ngOnInit() {
  }

}
