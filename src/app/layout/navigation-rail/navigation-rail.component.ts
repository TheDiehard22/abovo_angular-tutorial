import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-rail',
  templateUrl: './navigation-rail.component.html',
  styleUrls: ['./navigation-rail.component.css'],
})
export class NavigationRailComponent {
  routes = [
    { id: 'home', name: 'Home', href: '/', icon: 'dashboard' },
    {
      id: 'social',
      name: 'Social Media',
      href: '/social-media',
      icon: 'dynamic_feed',
    },
    { id: 'settings', name: 'Settings', href: '/settings', icon: 'settings' },
  ];
}
