import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-rail',
  templateUrl: './navigation-rail.component.html',
  styleUrls: ['./navigation-rail.component.css'],
})
export class NavigationRailComponent implements OnInit, OnDestroy {
  loggedIn: boolean;
  loggedInObs = this.auth.user;
  userData: firebase.User[] = [];

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

  constructor(
    private authService: AuthService,
    public auth: AngularFireAuth,
    private route: Router,
  ) {}

  onLogin() {
    if (this.loggedIn) {
      this.auth.auth.signOut();
      this.route.navigate(['login']);
    }
  }

  ngOnInit() {
    this.authService.loggedInStateChanged.subscribe((loggedIn: boolean) => {
      this.loggedIn = loggedIn;
    });

    this.loggedInObs.subscribe(data => {
      console.log('loggedinObs', data);
      this.userData.push(data);
      console.log('loggedinObs2', this.userData);
      this.loggedIn = data ? true : false;
    });
  }

  ngOnDestroy(): void {
    this.authService.loggedInStateChanged.unsubscribe();
  }
}
