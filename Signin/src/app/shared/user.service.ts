import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    first_name: '',
    last_name: '',
    email: '',
    major: '',
    w_num: '',
    password: '',
  };


  constructor(public http: HttpClient) { }

  // postUser(user: User){
  //   return this.http.post(environment.apiBaseUrl,user);//+'/register',user);
  // }

  // postUser(user: User){
  //   return this.http.post(environment.apiBaseUrl,user);//+'/register',user);
  // }
  
}
