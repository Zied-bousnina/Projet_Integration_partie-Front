import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/classes/admin';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ProfileService } from '../../services/profile.service';
import { User } from 'src/app/classes/user';
import { AdminService } from '../../services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-f',
  templateUrl: './login-f.component.html',
  styleUrls: ['./login-f.component.css']
})
export class LoginFComponent implements OnInit {
  admin = new Admin()

  count :number =0
  a: Admin[] | any[] = [];
  u: User |any;
  isInscri =false


  constructor(private router:Router, private adminService:AdminService,private formBuilder :FormBuilder) { }

  registerForm!:FormGroup;
  submitted =false
  // admin =new Admin()
  notAdmin: boolean =false;
  isAdmin:Admin[]=[];
  souAdmin:boolean=false;
  ngOnInit(): void {
  //  this.Adminservice.getAllAdmin().subscribe(data=>this.a = data)
  this.registerForm= this.formBuilder.group({
    email:['', Validators.required],
    pass:['', Validators.required],

    // class:['', Validators.required]
})

  }
  onSubmit(){
    this.submitted=true;
  }
     valid(admin:Admin){
     console.log(admin);
     console.log(this.adminService.getAdmin(admin.email, admin.password).subscribe());
      this.adminService.getAdmin(admin.email, admin.password).subscribe(data=>{console.log(data)
      this.isAdmin = data;
      console.log(data.length)
      if (data.length==1) {
        this.admin.role!='admin'?this.souAdmin=true:this.souAdmin=false;
        this.adminService.auth(true,this.souAdmin);
         console.log(this.souAdmin)

        this.router.navigate([`admin/`])

      }else{
        alert("Verif you're Password or UserName !!")
      }
    })

    // this.isAdmin = this.service.Admin.filter(r=>r.email ==admin.email && r.password ==admin.password)
    // if(this.isAdmin.length ){
    //   this.router.navigate(['admin'])
    //   this.service.auth(true)
    // }else{
    //   this.notAdmin ==true
    // }








  }

}
