import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
import { Admin } from '../../../../classes/admin';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  admin = new Admin()

  count :number =0
  a: Admin[] | any[] = [];

  isInscri =false


  constructor(private router:Router, private adminService:AdminService) { }

  // admin =new Admin()
  notAdmin: boolean =false;
  isAdmin:Admin[]=[];
  souAdmin:boolean=false;
  ngOnInit(): void {
  //  this.Adminservice.getAllAdmin().subscribe(data=>this.a = data)

  }
     valid(admin:Admin){
     console.log(admin);
    
    

    // this.isAdmin = this.service.Admin.filter(r=>r.email ==admin.email && r.password ==admin.password)
    // if(this.isAdmin.length ){
    //   this.router.navigate(['admin'])
    //   this.service.auth(true)
    // }else{
    //   this.notAdmin ==true
    // }








  }



}
