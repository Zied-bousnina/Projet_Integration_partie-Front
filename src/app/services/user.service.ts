import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Delete } from '@nestjs/common';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http:HttpClient) { }

  getAllUser(){
    return this.http.get('http://localhost:3000/user')
  }
  getOneUSer(email:string){
    return this.http.get(`http://localhost:3000/user/${email}`)
  }
  createUser(newUser:User){
    return  this.http.post(`http://localhost:3000/user/`, newUser)


  }

  Delete(email:string){
    this.http.delete(`http://localhost:3000/user/${email}`)
  }
}
