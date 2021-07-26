import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DarkSkyService {

  private EXCLUDE_HOURLY = 'exclude=hourly';

  private LANG_ES = 'lang=es';

  private LANG_EN = 'lang=en';

  constructor(private httpClient: HttpClient) { }

  getWeatherByTime(latitude: number, longitude: number, time: number, lang: string): Observable<any> {
    return this.httpClient.get(`/api/${environment.api_key}/${latitude},${longitude},${time}?${this.EXCLUDE_HOURLY}&${lang === 'es' ? this.LANG_ES : this.LANG_EN}`);
  }

}
