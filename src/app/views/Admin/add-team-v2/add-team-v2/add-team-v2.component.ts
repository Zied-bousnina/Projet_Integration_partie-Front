import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EquipeTournoiService } from '../../../../services/equipe-tournoi.service';

@Component({
  selector: 'app-add-team-v2',
  templateUrl: './add-team-v2.component.html',
  styleUrls: ['./add-team-v2.component.css']
})
export class AddTeamV2Component implements OnInit {
  registerForm!:FormGroup;
  submitted =false
  id_equipe:Object|any;
  constructor(private formBuilder: FormBuilder, private route:Router, private router:ActivatedRoute , private serviceEquipe:EquipeTournoiService) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
        name:['', Validators.required],
      //   lastName:['', Validators.required],
      //   adresse:['', Validators.required],
      //   tel:['', Validators.required]
      })
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return
    }else{


        this.serviceEquipe.createEquipe({...this.registerForm.value,...{"id_tournoi":this.router.snapshot.params['id']}}).subscribe({})
        console.log({...this.registerForm.value,...{"id_tournoi": this.router.snapshot.params['id']}})
        alert("success")
        this.route.navigate(['/admin/Tournoi/affiche',this.router.snapshot.params['id']])
    }

  }

}
