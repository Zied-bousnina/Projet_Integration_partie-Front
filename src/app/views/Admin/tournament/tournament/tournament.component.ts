import { Component, OnInit } from '@angular/core';
import { Equipe } from '../../../../classes/equipe';
import { EquipeService } from '../../../../services/equipe.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
// count:number|any = 0;
equipe:Equipe|any;
  constructor(private equipeservice: EquipeService) { }

  ngOnInit(): void {

    this.equipeservice.getAll().subscribe(data=>{
        this.equipe=data;
    })

  }

}
