import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Demande } from '../classes/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get('http://localhost:3000/demande')
  }
  getOneByIdClient(idClient:string){
    return this.http.get(`http://localhost:3000/demande/${idClient}`)
  }

  createDemande(demande:Object){
    return this.http.post('http://localhost:3000/demande', demande)
  }
  Update(id:string, data:boolean){
    this.http.patch(`http://localhost:3000/demande/${id}`, {etat:data}).subscribe({})
  }




}
