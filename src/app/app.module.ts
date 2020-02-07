import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localeNl from '@angular/common/locales/nl';

import { AppComponent } from './app.component';
import { NavigationRailComponent } from './layout/navigation-rail/navigation-rail.component';

import { HomeComponent } from './views/home/home.component';
import { SocialMediaComponent } from './views/social-media/social-media.component';
import { SettingsComponent } from './views/settings/settings.component';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TwitterFeedComponent } from './components/twitter-feed/twitter-feed.component';
import { TwitterCardComponent } from './components/reuse/twitter-card/twitter-card.component';

import { RippleDirective } from './directives/ripple.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'social-media', component: SocialMediaComponent },
  { path: 'settings', component: SettingsComponent },
];

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,
    NavigationRailComponent,
    HomeComponent,
    SocialMediaComponent,
    SettingsComponent,
    ToolbarComponent,
    WeatherCardComponent,
    TodoCardComponent,
    TwitterFeedComponent,
    TwitterCardComponent,
    RippleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }, //TODO: only in prod
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
