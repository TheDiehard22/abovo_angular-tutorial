import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localeNl from '@angular/common/locales/nl';

import { AppComponent } from './app.component';
import { NavigationRailComponent } from './layout/navigation-rail/navigation-rail.component';

import { HomeComponent } from './views/home/home.component';
import { SocialMediaComponent } from './views/social-media/social-media.component';
import { SettingsComponent } from './views/settings/settings.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TwitterFeedComponent } from './components/twitter-feed/twitter-feed.component';
import { TwitterCardComponent } from './components/reuse/twitter-card/twitter-card.component';

import { RippleDirective } from './directives/ripple.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { LinkedAccountsComponent } from './views/settings/linked-accounts/linked-accounts.component';

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,
    NavigationRailComponent,
    HomeComponent,
    SocialMediaComponent,
    SettingsComponent,
    NotFoundComponent,
    ToolbarComponent,
    WeatherCardComponent,
    TodoCardComponent,
    TwitterFeedComponent,
    TwitterCardComponent,
    RippleDirective,
    LinkedAccountsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
