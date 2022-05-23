import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../../../../services/demande.service';
import { Demande } from '../../../../classes/demande';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../classes/user';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  u:User|any

  newDemande= new Demande()

  constructor(private demandeService:DemandeService, private router:ActivatedRoute, private UserService:UserService) { }

  ngOnInit(): void {
    // this.demandeService.getAll().subscribe(data=>console.log(data))
    console.log(this.router.snapshot.params['email'])
    this.UserService.getOneUSer(this.router.snapshot.params['email']).subscribe(data=>{console.log(data);this.u=data

    })
  }

  add(demande:Demande){
    const {produit, design} = demande
    console.log(demande)

    this.demandeService.createDemande({produit:produit, design:design, idClient:this.u[0]._id}).subscribe({})


  }
}
