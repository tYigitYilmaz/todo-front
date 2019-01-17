import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gateway_UserService_URL,UserService_URL } from '../app.constants';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http:HttpClient
  ) { }
// ,{user
// }).pipe(
//   map((response: Response) => JSON.stringify(response), JSON.stringify(user))

user = 'assets/config.json';

registerUser(user){
    return this.http.post(`${Gateway_UserService_URL}/api/register`,user)
}

}
