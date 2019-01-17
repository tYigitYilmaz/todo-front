import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { User } from '../user/user.component';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {map} from 'rxjs/operators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router : Router,
    private registerService : RegisterService,
    private formBuilder: FormBuilder
  ) { this.loginForm = formBuilder.group({
    dob: ["", Validators.required]
  });
}

  ngOnInit() {
  }

  registerUser(){

    // console.log(this.username);
    // if(this.username==="username"&&this.password==='dummy'){
      this.registerService.registerUser(User)      
      .subscribe(
        data=>{
          console.log(data)
          this.router.navigate(['Login'])
        },
        error=>{
          console.log(error)
        }
      )  
    }

}