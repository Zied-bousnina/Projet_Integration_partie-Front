import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import Validation from './utils/validation';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  newUser = new User()
  a: Object | any;
  dejaInscri=false


  constructor(private UserService: UserService,private  router:Router) { }

  ngOnInit(): void {
    this.UserService.getAllUser().subscribe(data=>console.log(data))
  }
  add(user: User){
    this.UserService.getOneUSer(user.email).subscribe( data=>{
      this.a = data
      if(Object.keys(this.a).length ===0){
        this.UserService.createUser(user).subscribe({})
        this.router.navigate([`/user/${user.email}`])
      }else {
        this.dejaInscri =true


      }

    })
    console.log(user)



    // if(this.UserService.getOneUSer(user.email)){

    //   this.UserService.createUser(user)
    //   this.router.navigate(['/user'])
    // }else{
    //   alert('vous-etes deja inscri !!')
    //   this.router.navigate(['/login'])
    // }

  }

}
