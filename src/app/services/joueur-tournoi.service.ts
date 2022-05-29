import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL: string = 'http://127.0.0.1:8000/api/joueurTournoi';


@Injectable({
  providedIn: 'root'
})
export class JoueurTournoiService {

  constructor(private http:HttpClient) { }

 createJoueur(o:object){

  return this.http.post(`${API_URL}/createJoueur`, o);
}

getAll(){
  return this.http.get(`${API_URL}/getAllequipe`)
}
count(){
  return this.http.get(`${API_URL}/count`)
}
getbyId_equipe(id:BigInteger){
  return this.http.get(`${API_URL}/getJoueurByIDEquipe/${id}`)
}
}
