import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { SocialMediaComponent } from './views/social-media/social-media.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { LinkedAccountsComponent } from './views/settings/linked-accounts/linked-accounts.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'social-media',
    canActivate: [AuthGuard],
    component: SocialMediaComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }, //TODO: only in prod
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
