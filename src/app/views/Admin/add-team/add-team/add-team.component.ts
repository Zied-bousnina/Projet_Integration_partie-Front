import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipeService } from '../../../../services/equipe.service';
import { TournoiService } from '../../../../services/tournoi.service';
import { EquipeTournoiService } from '../../../../services/equipe-tournoi.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  // routerLink="/admin/participant/tournament"

  registerForm!:FormGroup;
  submitted =false
  id_equipe:Object|any;

  constructor(private formBuilder: FormBuilder, private route:Router, private serviceEquipe:EquipeTournoiService, private serviceTournoi:TournoiService) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      name:['', Validators.required],
    //   lastName:['', Validators.required],
    //   adresse:['', Validators.required],
    //   tel:['', Validators.required]
    })
    this.serviceTournoi.getLastIdTournoi().subscribe(data=>{this.id_equipe=data
        console.log(this.id_equipe[0].id_tournoi)
    })
    console.log(this.id_equipe)
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return
    }else{


        console.log()
        this.serviceEquipe.createEquipe({...this.registerForm.value,...{"id_tournoi":this.id_equipe[0].id_tournoi}}).subscribe({})
        console.log({...this.registerForm.value,...{"id_tournoi":this.id_equipe[0].id_tournoi}})
        alert("success")
        this.serviceTournoi.getLastIdTournoi().subscribe(data=>{this.id_equipe=data
            console.log(this.id_equipe[0].id_tournoi)
            this.route.navigate(['/admin/Tournoi/affiche/',this.id_equipe[0].id_tournoi])
        })
    }

  }
}
