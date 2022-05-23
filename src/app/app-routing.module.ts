import { MatchModule } from './views/Front/match/match.module';
import { LoginFComponent } from './layouts/login-f/login-f.component';
import { NotFoundFrontComponent } from './views/Front/not-found-front/not-found-front/not-found-front.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LoginComponent } from './views/Front/login/login/login.component';
import { ProfileService } from './services/profile.service';
import { SignInComponent } from './layouts/sign-in/sign-in.component';
// import { LoginComponent } from '../../../../Blog-with-NestJS-and-Angular/frontend/src/app/components/login/login.component';
import { ShopComponent } from './layouts/shop/shop.component';
import { AuthGuard } from './guards/auth.guard';
// import { SignInComponent } fro./layouts/sign-in/sign-in.componentent';

const routes: Routes = [
  {path:"", component: FrontLayoutComponent,children: [
    // {path:"", loadChildren: ()=>import("./views/Front/front/front.module").then(m=>m.FrontModule)},
    {path:"", loadChildren: ()=>import("./views/Front/match/match.module").then(m=>m.MatchModule)},
    {path:"matchTour", loadChildren: ()=>import("./views/Front/match-tournoi/match-tournoi.module").then(m=>m.MatchTournoiModule)},
    {path:"tournoi", loadChildren: ()=>import("./views/Front/tournoi/tournoi.module").then(m=>m.TournoiModule)},
    {path:"matchTour/equipe/:id", loadChildren: ()=>import("./views/Front/equipe/equipe.module").then(m=>m.EquipeModule)},
    // {path:"login", loadChildren: ()=>import("./views/Front/login/login.module").then(m=>m.LoginModule)}

  ]},
  {path:"admin", component: AdminLayoutComponent,
  // canActivate:[AuthGuard],
     children:[
      {path:'', loadChildren:()=>import('./views/Admin/front-admin/front-admin.module').then(m=>m.FrontAdminModule)},

       {path:'dashbord', loadChildren:()=>import('./views/Admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
       {path:'addProduct', loadChildren:()=>import('./views/Admin/add-product/add-product.module').then(m=>m.AddProductModule)},
       {path:'demandes', loadChildren:()=>import('./views/Admin/consult-demandes/consult-demandes.module').then(m=>m.ConsultDemandesModule)},
       {path:'profilAdmin', loadChildren:()=>import('./views/Admin/profil/profil.module').then(m=>m.ProfilModule)},
       {path:'consultMatch', loadChildren:()=>import('./views/Admin/consult-match/consult-match.module').then(m=>m.ConsultMatchModule)},
       {path:'consultTournoi', loadChildren:()=>import('./views/Admin/consult-tournoi/consult-tournoi.module').then(m=>m.ConsultTournoiModule)},
       {path:'addMatch', loadChildren:()=>import('./views/Admin/add-match/add-match.module').then(m=>m.AddMatchModule)},
       {path:'Tournoi', loadChildren:()=>import('./views/Admin/add-tournoi/add-tournoi.module').then(m=>m.AddTournoiModule)},
       {path:'Tournoi/addTournoi', loadChildren:()=>import('./views/Admin/tournoi/tournoi.module').then(m=>m.TournoiModule)},
       {path:'Tournoi/affiche/:id', loadChildren:()=>import('./views/Admin/affiche-tournoi/affiche-tournoi.module').then(m=>m.AfficheTournoiModule)},
       {path:'addEquipe', loadChildren:()=>import('./views/Admin/add-equipe/add-equipe.module').then(m=>m.AddEquipeModule)},
       {path:'AddSousAdmin', loadChildren:()=>import('./views/Admin/add-second-admin/add-second-admin.module').then(m=>m.AddSecondAdminModule)},
       {path:'participant', loadChildren:()=>import('./views/Admin/participant/participant.module').then(m=>m.ParticipantModule)},
       {path:'participant/tournament', loadChildren:()=>import('./views/Admin/tournament/tournament.module').then(m=>m.TournamentModule)},
       {path:'participant/tournament/addPlayer/:id_equipe', loadChildren:()=>import('./views/Admin/add-players/add-players.module').then(m=>m.AddPlayersModule)},
       {path:'participant/tournament/updateteam/:id', loadChildren:()=>import('./views/Admin/updateteam/updateteam.module').then(m=>m.UpdateteamModule)},
       {path:'participant/team', loadChildren:()=>import('./views/Admin/add-team/add-team.module').then(m=>m.AddTeamModule)},
       {path:'**', loadChildren:()=>import('./views/Admin/notfound/notfound.module').then(m=>m.NotfoundModule)}

     ]},
  {path:"user/:email", component: UserLayoutComponent ,
  children: [
    {path:"", loadChildren:()=>import('./views/User/front/front.module').then(m=>m.FrontModule)},
    {path:"demande/:email", loadChildren:()=>import('./views/User/demande/demande.module').then(m=>m.DemandeModule)},
    {path:"demandes/:email", loadChildren:()=>import('./views/User/demandes/demandes.module').then(m=>m.DemandesModule)},
    {path:'**', loadChildren:()=>import('./views/Admin/notfound/notfound.module').then(m=>m.NotfoundModule)}

  ]},
  {path:'login', component:LoginFComponent},
  {path:'signin', component:SignInComponent},
  {path:'shop', component:ShopComponent},
  {path:"**", component:NotFoundFrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
