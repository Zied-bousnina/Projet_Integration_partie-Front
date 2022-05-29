import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL: string = 'http://127.0.0.1:8000/api/tournoi';

@Injectable({
  providedIn: 'root'
})
export class TournoiService {

  constructor(private http:HttpClient) { }

  createTournoi(o:object){

   return this.http.post(`${API_URL}/createTournoi`, o);
 }
 getAllTournoi(){
   return this.http.get(`${API_URL}/getAllTournoi`);
 }
 getLastIdTournoi(){
  return this.http.get(`${API_URL}/getLastTournoi`);
 }
}
