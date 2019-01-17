import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';

export class User{
  constructor(
    public username : string,
    public password : string,
    public firstName : string,
    public lastName : string
  ){
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private registerService:RegisterService,
    private router : Router
  ) { }

  ngOnInit() {
  }

}
