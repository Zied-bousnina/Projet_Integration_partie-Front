import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from '../../../../classes/equipe';
import { EquipeService } from '../../../../services/equipe.service';


@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {


  registerForm!:FormGroup;
  submitted =false
  newEquipe = new Equipe();

  constructor(private formBuilder: FormBuilder, private route:Router, private serviceEquipe: EquipeService) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      name:['', Validators.required],
      type:['', Validators.required]

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

        alert("success")


        console.log(this.registerForm.value.name)
        this.serviceEquipe.createEquipe(this.registerForm.value).subscribe({});
        this.route.navigate(['/admin/participant/tournament'])
    }

  }

}
