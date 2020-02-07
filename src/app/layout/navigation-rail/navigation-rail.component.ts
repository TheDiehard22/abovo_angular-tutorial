import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation-rail',
  templateUrl: './navigation-rail.component.html',
  styleUrls: ['./navigation-rail.component.css'],
})
export class NavigationRailComponent implements OnInit, OnDestroy {
  loggedIn: boolean;
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

  constructor(private authService: AuthService) {}

  onLogin() {
    if (this.loggedIn) {
      this.authService.logout();
    } else {
      this.authService.login();
    }
  }

  ngOnInit() {
    this.authService.loggedInStateChanged.subscribe((loggedIn: boolean) => {
      this.loggedIn = loggedIn;
    });
  }

  ngOnDestroy(): void {
    this.authService.loggedInStateChanged.unsubscribe();
  }
}
