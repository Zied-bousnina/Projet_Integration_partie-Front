import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../../../services/equipe.service';
import { ActivatedRoute } from '@angular/router';
import { Joueur } from '../../../../classes/joueur';
import { JoueurService } from '../../../../services/joueur.service';

@Component({
  selector: 'app-view-equipe',
  templateUrl: './view-equipe.component.html',
  styleUrls: ['./view-equipe.component.css']
})
export class ViewEquipeComponent implements OnInit {
    equipe:Object|any;
    joueur:Object|any;

  constructor(private equipeService:EquipeService, private router:ActivatedRoute, private joueurService:JoueurService) { }

  ngOnInit(): void {
      console.log(this.router.snapshot.params['id_equipe'])
  this.equipeService.getEquipeByID(this.router.snapshot.params['id_equipe']).subscribe(data=>{this.equipe=data; console.log(this.equipe)})
  this.joueurService.getbyId_equipe(this.router.snapshot.params['id_equipe']).subscribe(data=>{this.joueur=data});
  }

  delete(id:BigInt){
      this.joueurService.delete(id).subscribe({});

  }

}
