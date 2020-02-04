import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  currentWeather: any = <any>{};
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCurrentWeather()
      .subscribe(res => {
        console.log(res);
        this.currentWeather = res;
      })
  }

}
