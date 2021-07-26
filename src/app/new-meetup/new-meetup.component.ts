import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WeatherService} from '../services/weather.service';
import {UserService} from '../services/user.service';
import {MeetupService} from '../services/meetup.service';
import {DarkSkyService} from '../services/dark-sky.service';
import {environment} from '../../environments/environment';
import {Weather} from '../models/weather';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-meetup',
  templateUrl: './new-meetup.component.html',
  styleUrls: ['./new-meetup.component.scss']
})
export class NewMeetupComponent implements OnInit {

  min: Date;
  max: Date;
  newForm: FormGroup;
  currentWeather: Weather;
  wrongDate: boolean = false;

  constructor(private weatherService: WeatherService,
              private userService: UserService,
              private meetupService: MeetupService,
              private darkSkyService: DarkSkyService,
              private router: Router) {
    this.min = new Date();
    this.max = new Date();
    this.max.setDate(new Date().getDate() + 7);
    this.max.setHours(23, 59, 0, 0);
  }

  ngOnInit(): void {
    this.initForm();
  }

  getWeekWeather(): void {
    const datetime: Date = this.newForm.get('datetime').value;
    if (datetime) {
      this.wrongDate = false;
      this.darkSkyService.getWeatherByTime(environment.default_locaction.latitude,
        environment.default_locaction.latitude,
        this.getUnixTime(datetime),
        'es')
        .subscribe((data) => this.currentWeather = data.daily.data[0]);
    } else {
      this.wrongDate = true;
    }
  }

  initForm(): void {
    this.newForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      location: new FormControl({value: 'Buenos Aires', disabled: true}, Validators.required),
      datetime: new FormControl('', [Validators.required]),
      total_birras: new FormControl('', Validators.required),
      total_guests: new FormControl('', [Validators.required, Validators.max(9999), Validators.min(1), Validators.pattern('^[0-9]*$')])
    });
  }

  getUnixTime(date: Date): number {
    return new Date(date).getTime() / 1000;
  }

  farenheitToCelsius(temperature: number): number {
    return (temperature - 32) * 5 / 9;
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }

  amountOfBirras(): void {
    if (this.newForm.get('total_guests').value && this.currentWeather) {
      let totalBirras: number;
      const guests: number = this.newForm.get('total_guests').value;
      const temperatureMin = parseFloat(this.farenheitToCelsius(this.currentWeather.temperatureMin).toFixed(1));
      const temperatureMax = parseFloat(this.farenheitToCelsius(this.currentWeather.temperatureMax).toFixed(1));

      if ( temperatureMin > 20 && temperatureMax < 24) {
        totalBirras = guests;
      } else if (temperatureMax < 20) {
        totalBirras = guests * 0.75;
      } else if (temperatureMax > 24) {
        totalBirras = guests * 2;
      }

      this.newForm.get('total_birras').setValue(Math.round(totalBirras));
    }
  }
}
