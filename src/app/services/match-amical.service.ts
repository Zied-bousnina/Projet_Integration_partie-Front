import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL: string = 'http://127.0.0.1:8000/api/matchAmical';

@Injectable({
  providedIn: 'root'
})
export class MatchAmicalService {

  constructor(private http:HttpClient) { }

  createMatch(o:object){

   return this.http.post(`${API_URL}/createMatch`, o);
 }
 getAllMatch(){
   return this.http.get(`${API_URL}/match`);
 }

 getAllMatchByType(type:String){
  return this.http.get(`${API_URL}/AllMatchByType/${ type.toUpperCase()}`);
}
 getLastIdTournoi(){
  return this.http.get(`${API_URL}/getLastTournoi`);
 }

 deleteMatch(id:BigInteger){
   return this.http.delete(`${API_URL}/destroy/${id}`)
  //  matchAmical/updateMatch

 }
}
