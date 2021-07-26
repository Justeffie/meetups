import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from '../models/weather';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = `${environment.apiHost}${environment.apiBase}${environment.weathers}`;

  constructor(private httpClient: HttpClient) { }

  fetchAll(): Observable<Weather[]> {
    return this.httpClient.get<Weather[]>(this.url);
  }

  findById(id: number): Observable<Weather> {
    return this.httpClient.get<Weather>(`${this.url}/${id}`);
  }
}
