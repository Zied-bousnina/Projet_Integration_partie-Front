import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from '../../../../services/demande.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  u: Object |any;
  id: any;
  demandes: Object|any;

  constructor(private userservice: UserService,private router:ActivatedRoute, private demandeService:DemandeService) { }

  ngOnInit(): void {
    this.userservice.getOneUSer(this.router.snapshot.params['email']).subscribe(data=>{
      this.u = data;
      this.id = this.u[0]._id
      console.log(this.id)
      this.demandeService.getOneByIdClient(this.id).subscribe(data =>{ this.demandes = data; console.log(this.demandes)})
    })

  }

}
