import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../classes/user';



@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
  u: User |any;
  // email: Observable<string>

  constructor(private UserService:UserService, private router:ActivatedRoute) {
    // this.email= router.params.pipe(map(p => p['email']));


  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['email'])
    this.UserService.getOneUSer(this.router.snapshot.params['email']).subscribe(data=>{this.u=data
      console.log(this.u[0]._id)
    })
  }

}
