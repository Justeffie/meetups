import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


export interface AuthResponseData {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  singup(name: string, surname: string, email: string, password: string, edad: number): void {
    const body = {name, surname, email, password, edad};
    this.httpClient.post<AuthResponseData>(`${environment.apiHost}${environment.apiBase}${environment.register}`,
      {
        ...body,
        meetups_created: [],
        meetups_in: []
      });

  }

  login(): void {

  }

  logout(): void {

  }

  autoLogin(): void {

  }

  a
}
