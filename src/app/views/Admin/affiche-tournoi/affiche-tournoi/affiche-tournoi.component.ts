import { Component, OnInit } from '@angular/core';
import { EquipeTournoiService } from '../../../../services/equipe-tournoi.service';
import { ActivatedRoute } from '@angular/router';
import { JoueurTournoiService } from '../../../../services/joueur-tournoi.service';

@Component({
  selector: 'app-affiche-tournoi',
  templateUrl: './affiche-tournoi.component.html',
  styleUrls: ['./affiche-tournoi.component.css']
})
export class AfficheTournoiComponent implements OnInit {

  equipe:Object|any;
  constructor(private equipeservice: EquipeTournoiService, private router:ActivatedRoute, private joueurService: JoueurTournoiService) { }
  id:BigInteger|any;
  count:Object|any;

  ngOnInit(): void {
      console.log(this.router.snapshot.params['id_tournoi']);
      this.id= this.router.snapshot.params['id_tournoi'];


    this.equipeservice.getALlByIDTournoi(this.router.snapshot.params['id_tournoi']).subscribe(data=>{
        this.equipe=data;
    })
    this.joueurService.count().subscribe(data=>{
        this.count = data;
        console.log(this.count)
    })


  }

}
