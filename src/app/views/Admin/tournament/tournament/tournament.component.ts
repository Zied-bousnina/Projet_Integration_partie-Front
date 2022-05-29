import { Component, OnInit } from '@angular/core';
import { Equipe } from '../../../../classes/equipe';
import { EquipeService } from '../../../../services/equipe.service';
import { JoueurService } from '../../../../services/joueur.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
// count:number|any = 0;
equipe:Equipe|any;
count :object|any;
  constructor(private equipeservice: EquipeService, private joueurservi:JoueurService) { }

  ngOnInit(): void {

    this.equipeservice.getAll().subscribe(data=>{
        this.equipe=data;
    })
    this.joueurservi.getCount().subscribe(data=>{
        this.count = data;
        console.log(this.count)
    })


  }

}
