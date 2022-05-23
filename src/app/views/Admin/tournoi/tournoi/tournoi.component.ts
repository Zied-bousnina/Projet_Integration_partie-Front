import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TournoiService } from 'src/app/services/tournoi.service';

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css']
})
export class TournoiComponent implements OnInit {

    registerForm!:FormGroup;
    submitted =false

    constructor(private formBuilder: FormBuilder, private route:Router, private serviceTournoi:TournoiService) { }

    ngOnInit(): void {
      this.registerForm= this.formBuilder.group({
        nomTournoi:['', Validators.required],
        date:['', Validators.required],
        lieu:['', Validators.required],
        type:['', Validators.required]
      })
    }
    onSubmit(){
      this.submitted=true;
      if(this.registerForm.invalid){
        return
      }else{

          alert("success")

          this.serviceTournoi.createTournoi(this.registerForm.value).subscribe({})

          this.route.navigate(['/admin/participant'])
        console.log(this.registerForm.value)

        }
    }

}
