import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiKey = environment.openWeatherApiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  public getCurrentWeather() {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=Hoorn&units=metric&APPID=${apiKey}`)
  }
}
