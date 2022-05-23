import { DemandeService } from './../../services/demande.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  demandes: Object|any;
  count: number =0;
  souAdmin:boolean=false;

  constructor(private demande:DemandeService, private router:Router, private adminService:AdminService) { }

  ngOnInit(): void {

    this.souAdmin =this.adminService.souAdmin;

    this.demande.getAll().subscribe(data=>{
      this.demandes = data;
       console.log(this.demandes);
       for (let index = 0; index < this.demandes.length; index++) {
         console.log(this.demandes[index].etat)
         if (!this.demandes[index].etat) {
           this.count++
         console.log(this.count)


         }

       }
      })
    }

    notif(){
      window.location.reload()




    }
}
