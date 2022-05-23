import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  // routerLink="/admin/participant/tournament"

  registerForm!:FormGroup;
  submitted =false

  constructor(private formBuilder: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      teamName:['', Validators.required],
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
        this.route.navigate(['/admin/participant/tournament'])
    }

  }
}
