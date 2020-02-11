import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public auth: AngularFireAuth, private route: Router) {}

  async login(): Promise<auth.UserCredential> {
    const signIn = await this.auth.auth.signInWithPopup(
      new auth.GoogleAuthProvider(),
    );
    this.route.navigate(['']);

    return signIn;
  }
}
