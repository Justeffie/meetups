import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Meetup} from '../models/meetup';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  private url = `${environment.apiHost}${environment.apiBase}${environment.meetups}`;

  constructor(private httpClient: HttpClient) { }

  fetchAll(): Observable<Meetup[]> {
    return this.httpClient.get<Meetup[]>(this.url);
  }

  findById(id: number): Observable<Meetup> {
    return this.httpClient.get<Meetup>(`${this.url}/${id}`);
  }
}
