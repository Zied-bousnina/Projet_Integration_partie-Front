import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../classes/admin';
// import { Admin } from '../../../../api/dist/schemas/admin';

const API_URL: string = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isadmin:boolean=false
  souAdmin:boolean=false;
  constructor(private http:HttpClient) { }

  auth(t:boolean, ok:boolean){
    this.isadmin =t;
    this.souAdmin=ok;

  }
  getAdmin(email: string, password:string){
    return this.http.get<Admin []>(`${API_URL}/admin/${email}/${password}`)


  }
  getAllAdmin(){
    return this.http.get<Admin []>(`${API_URL}`)
  }

  createAdmin(admin:Admin){

    return this.http.post(`${API_URL}`, admin);
  }
  deleteAdmin(id:number){
    return this.http.delete(`${API_URL}/${id}`);

  }
}
