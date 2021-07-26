import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Meetup} from '../../models/meetup';
import {WeatherService} from '../../services/weather.service';
import {Subscription} from 'rxjs';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-meetup-list-item',
  templateUrl: './meetup-list-item.component.html',
  styleUrls: ['./meetup-list-item.component.scss']
})
export class MeetupListItemComponent implements OnInit, OnDestroy {

  @Input() meetup: Meetup;
  weatherSubscription: Subscription;
  weather: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherSubscription = this.weatherService.findById(this.meetup.weather)
                                                  .subscribe((data) => this.weather = data);

  }

  ngOnDestroy(): void {
    this.weatherSubscription.unsubscribe();
  }

}
