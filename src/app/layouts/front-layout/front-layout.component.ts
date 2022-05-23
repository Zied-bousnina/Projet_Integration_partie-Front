import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';

export class personne {
  email:string |any;
  password:string |any;

};
@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {

personne = new personne()
validi= true
date:number | undefined ;

  constructor(private router :Router, private ser:ProfileService) {

  }

  ngOnInit(): void {
    this.date = new Date().getFullYear();
    this.ser.getAdmin("zaydoun").subscribe(data=>console.log(data))
  }
  verif(per:personne){
    console.log(per)
    if(!this.validi){
      this.router.navigate(['/admin'])


    }else{
      this.router.navigate(['/user'])
    }
  }

}
