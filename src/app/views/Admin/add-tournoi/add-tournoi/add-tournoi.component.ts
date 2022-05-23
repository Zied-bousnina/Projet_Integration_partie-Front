import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournoi } from '../../../../classes/tournoi';
import { TournoiService } from '../../../../services/tournoi.service';

@Component({
  selector: 'app-add-tournoi',
  templateUrl: './add-tournoi.component.html',
  styleUrls: ['./add-tournoi.component.css']
})
export class AddTournoiComponent implements OnInit {


    tournois:Tournoi|any
  constructor(private router:ActivatedRoute, private route:Router, private tournoiService: TournoiService) { }

  ngOnInit(): void {
      this.tournoiService.getAllTournoi().subscribe(data=>{
          this.tournois=data
      })


  }
  pass(){
      console.log(this.router.snapshot.params['email'])
      this.route.navigate([`admin/${this.router.snapshot.params['email'] }/Tournoi/addTournoi`])

  }

}
