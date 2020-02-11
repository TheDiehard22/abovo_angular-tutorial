import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate } from '@angular/fire/auth-guard';
import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
  AngularFireAuthGuard,
  AngularFireAuthGuardModule,
} from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HomeComponent } from './views/home/home.component';
import { SocialMediaComponent } from './views/social-media/social-media.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LinkedAccountsComponent } from './views/settings/linked-accounts/linked-accounts.component';
import { LoginComponent } from './views/login/login.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
    // ...canActivate(redirectLoggedInToHome),
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    // ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'social-media',
    // ...canActivate(redirectUnauthorizedToLogin),
    component: SocialMediaComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
    // ...canActivate(redirectUnauthorizedToLogin),
    children: [
      {
        path: 'linked-accounts',
        component: LinkedAccountsComponent,
      },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
@NgModule({
  // declarations: [
  //   HomeComponent,
  //   SocialMediaComponent,
  //   SettingsComponent,
  //   NotFoundComponent,
  // ],
  imports: [
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }, //TODO: only in prod
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
