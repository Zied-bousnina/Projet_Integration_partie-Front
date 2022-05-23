import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../classes/admin';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  Admin =[
    {email:'admin@admin.com',password:'admin'}
  ]
  isadmin:boolean=false

  constructor(private http:HttpClient) { }

  auth(t:boolean){
    this.isadmin =t

  }
  getAdmin(userName: string){
    return this.http.get<Admin []>(`http://localhost:3000/admin/${userName}`)


  }
  getAllAdmin(){
    return this.http.get<Admin []>(`http://localhost:3000/admin/`)
  }
}
