import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-settings .page .flex .justify-center',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((url: UrlSegment[]) => {
      console.log('hmm', url);
    });
  }
}
