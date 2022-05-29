import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL: string = 'http://127.0.0.1:8000/api/equipe';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {

 constructor(private http:HttpClient) { }

 createEquipe(o:object){

  return this.http.post(`${API_URL}/createEquipe`, o);
}

getAll(){
  return this.http.get(`${API_URL}/getAllequipe`)
}
getEquipeByID(id:BigInt){
  return this.http.get(`${API_URL}/getEquipeByID/${id}`)
}
}
