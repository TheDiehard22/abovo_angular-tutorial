import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localeNl from "@angular/common/locales/nl"

import { AppComponent } from './app.component';
import { NavigationRailComponent } from './layout/navigation-rail/navigation-rail.component';

import { HomeComponent } from "./views/home/home.component";
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

registerLocaleData(localeNl)

@NgModule({
  declarations: [
    AppComponent,
    NavigationRailComponent,
    HomeComponent,
    ToolbarComponent,
    WeatherCardComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } //TODO: only in prod
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
