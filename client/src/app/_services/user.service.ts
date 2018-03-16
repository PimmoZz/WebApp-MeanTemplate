import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UserRegister, UserLogin } from '../_models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public login(loginForm: UserLogin): Observable<any> {
    return this.http.post<any>('/users/login', loginForm, httpOptions);
  }

  public getById(_id: string) {
    return this.http.get('/users/' + _id, httpOptions);
  }

  public checkUsername(username: string): Observable<any> {
    return this.http.get('/users/check?username=' + username, httpOptions);
  }

  public checkEmail(email: string): Observable<any> {
    return this.http.get('/users/check?email=' + email, httpOptions);
  }

  public registerUser(user: UserRegister) {
    return this.http.post('/users/register', user, httpOptions);
  }

  public userInfo(): Observable<any> {
    return this.http.get('/users/userinfo', httpOptions);
  }

}
