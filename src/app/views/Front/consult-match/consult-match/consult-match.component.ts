import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchAmicalService } from '../../../../services/match-amical.service';
import { EquipeService } from '../../../../services/equipe.service';

@Component({
  selector: 'app-consult-match',
  templateUrl: './consult-match.component.html',
  styleUrls: ['./consult-match.component.css']
})
export class ConsultMatchComponent implements OnInit {

  constructor(private router:ActivatedRoute, private serviceMatchA:MatchAmicalService, private equipeService :EquipeService) { }
  matchs:Object|any;
  equipe:Object|any;
  type:String|any;

  ngOnInit(): void {
this.type = this.router.snapshot.params['type'];
    this.serviceMatchA.getAllMatchByType(this.router.snapshot.params['type']).subscribe(data=>{this.matchs= data

        console.log(this.matchs)
    })
    this.equipeService.getAll().subscribe(data=>{this.equipe = data})
  }
  delete(id:BigInteger){
      this.serviceMatchA.deleteMatch(id).subscribe({})

  }


}
