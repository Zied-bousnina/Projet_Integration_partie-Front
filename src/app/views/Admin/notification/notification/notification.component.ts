import { UserService } from './../../../../services/user.service';
import { DemandeService } from './../../../../services/demande.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],

})
export class NotificationComponent implements OnInit {
  demandes: Object |any;
 notification:Object| any;
    allUser: Object|any;
    CurrentDemande:Object| any;

  constructor(private router:ActivatedRoute, private demande:DemandeService, private users:UserService) { }

  ngOnInit(): void {
      this.demande.getAll().subscribe(data=> {
          this.demandes =data

        //   call demande
        for (let index = 0; index < this.demandes.length; index++) {
            if (this.demandes[index]._id === this.router.snapshot.params['id']) {
                this.notification = this.demandes[index]

            }


        }
        console.log(this.notification)
    })

    this.users.getAllUser().subscribe(data=>{
        this.allUser = data;

        for (let index = 0; index < this.allUser.length; index++) {
            if(this.allUser[index]._id ==this.notification.idClient){
                this.CurrentDemande = this.allUser[index]

                console.log(this.CurrentDemande)
            }


        }
        console.log(this.CurrentDemande.firstName)

    })
  }

}
