import { DemandeService } from './../../../../services/demande.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-demandes',
  templateUrl: './consult-demandes.component.html',
  styleUrls: ['./consult-demandes.component.css']
})
export class ConsultDemandesComponent implements OnInit {

    u: Object |any;
    id: any;
    demandes: Object|any;
    users: Object|any;

    constructor(private UserService: UserService,private router:ActivatedRoute, private demandeService:DemandeService) { }

    ngOnInit(): void {
      this.demandeService.getAll().subscribe(data=>{
          this.demandes = data
      })
      this.UserService.getAllUser().subscribe(data=>{
          this.users = data
      })

    }
    done(id:string){
        console.log(id)
        this.demandeService.Update(id, true)
        window.location.reload();

    }

}
