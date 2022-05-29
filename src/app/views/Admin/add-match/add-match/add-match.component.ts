import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchAmicalService } from '../../../../services/match-amical.service';
import { Equipe } from '../../../../classes/equipe';
import { EquipeService } from '../../../../services/equipe.service';

@Component({
    selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  registerForm!:FormGroup;
  submitted =false
  constructor(private formBuilder :FormBuilder, private router:Router, private matchservice: MatchAmicalService, private serviceEquipe:EquipeService) { }

  equipe:Equipe|any;
  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
        localisation:['', Validators.required],
        date:['', Validators.required],
        id_equipe1:['', Validators.required],
        id_equipe2:['', Validators.required],
        type:['', Validators.required]
        // class:['', Validators.required]
  })
  this.serviceEquipe.getAll().subscribe(data=>{this.equipe=data})

}
onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid && this.registerForm.value.id_equipe1 == this.registerForm.value.id_equipe2){

      return
    }else{
        if(this.registerForm.value.id_equipe1 == this.registerForm.value.id_equipe2){
            alert("les equipe doit etre different")
            return
        }

        alert("success")
        console.log(this.registerForm.value)
        console.log(this.registerForm.value.id_equipe1)
        console.log(this.registerForm.value.id_equipe2)
        this.matchservice.createMatch(this.registerForm.value).subscribe({})
        // this.servicejoueur.getbyId_equipe(this.router.snapshot.params['id_equipe']).subscribe(data=>{
        //     this.joueur = data
        // })
        // console.log(this.servicejoueur.getbyId_equipe(this.router.snapshot.params['id_equipe']).subscribe())
        // // this.joueur = this.joueur. { ...this.registerForm.value,...{"id_equipe":this.router.snapshot.params['id_equipe']}}
        // console.log(this.joueur)

    }

  }

}
