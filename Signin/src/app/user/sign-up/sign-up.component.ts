import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import {User} from '../../shared/user.model';
import {UserService} from '../../shared/user.service'
import { send } from 'q';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessage: string;
  http: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(this.userService.selectedUser);
    console.log(JSON.stringify(this.userService.selectedUser));
        var data = JSON.stringify(this.userService.selectedUser);
        var xhttp = new XMLHttpRequest();
        xhttp.open("post", "http://localhost:3000/signUp", true);
        xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhttp.send(data);
        

        setTimeout(() => this.showSucessMessage = false,4000);
        this.resetForm(form);
      //};
      // res => {
      //   this.showSucessMessage = true;
      //   setTimeout(() => this.showSucessMessage = false,4000);
      //   this.resetForm(form);
      // },
      // err => {
      //   if (err.ststus == 422) {
      //     this.serverErrorMessage = err.error.join('<br/>');
      //   }
      //   else
      //     this.serverErrorMessage = 'Something broke contact admin.';
      // }
    //);
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      first_name: '',
      last_name: '',
      email: '',
      major: '',
      w_num: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }
}
