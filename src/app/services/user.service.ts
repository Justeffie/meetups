import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from '../models/weather';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  private url = `${environment.apiHost}${environment.apiBase}${environment.users}`;

  constructor(private httpClient: HttpClient) { }

  fetchAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  findById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }

  findByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}?email=${email}`);
  }

}
