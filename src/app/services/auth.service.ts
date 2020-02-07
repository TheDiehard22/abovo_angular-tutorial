import { Subject } from 'rxjs';

export class AuthService {
  loggedIn = false;
  loggedInStateChanged = new Subject<boolean>();

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 200);
    });

    return promise;
  }

  login() {
    this.loggedIn = true;
    this.loggedInStateChanged.next(this.loggedIn);

    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
    this.loggedInStateChanged.next(this.loggedIn);

    return this.loggedIn;
  }
}
