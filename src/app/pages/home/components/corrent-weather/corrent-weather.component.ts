import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import * as EventEmitter from 'node:events';
import { CityWeather } from 'src/app/shared/models/weather.model';


@Component({
  selector: 'app-corrent-weather',
  templateUrl: './corrent-weather.component.html',
  styleUrls: ['./corrent-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrentWeatherComponent {

  @Input() cityWeather: CityWeather;
  @Output() toggleBookmark = new EventEmitter();

  get cityName(): string {
    return `${this.cityWeather.city.name} ${this.cityWeather.city.country}`;
  }

  onToggleBookmark() {
    this.toggleBookmark.emit();
  }
}


