import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JoueurService } from '../../../../services/joueur.service';
import { ActivatedRoute } from '@angular/router';
import { Joueur } from '../../../../classes/joueur';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  registerForm!:FormGroup;
  submitted =false
  joueur:Joueur|any;

  constructor(private formBuilder: FormBuilder, private servicejoueur:JoueurService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      dateNais:['', Validators.required],
      depJoueur:['', Validators.required],
      faculteJoueur:['', Validators.required],
      class:['', Validators.required]
    })
    this.servicejoueur.getbyId_equipe(this.router.snapshot.params['id_equipe']).subscribe(data=>{
        this.joueur = data
    })
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return
    }else{

        alert("success")
        console.log(this.router.snapshot.params['id_equipe'])
        console.log({...this.registerForm.value,...{"id_equipe":this.router.snapshot.params['id_equipe']}})
        this.servicejoueur.createJoueur({...this.registerForm.value,...{"id_equipe":this.router.snapshot.params['id_equipe']}}).subscribe({})
        this.servicejoueur.getbyId_equipe(this.router.snapshot.params['id_equipe']).subscribe(data=>{
            this.joueur = data
        })
        console.log(this.servicejoueur.getbyId_equipe(this.router.snapshot.params['id_equipe']).subscribe())
        // this.joueur = this.joueur. { ...this.registerForm.value,...{"id_equipe":this.router.snapshot.params['id_equipe']}}
        console.log(this.joueur)

    }

  }

}
