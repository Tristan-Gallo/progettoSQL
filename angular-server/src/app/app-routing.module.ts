import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './artista/artista.component';
import { BraniComponent } from './brani/brani.component';
import { FranciaComponent } from './francia/francia.component';
import { GlobaleComponent } from './globale/globale.component';
import { HomeComponent } from './home/home.component';
import { InghilterraComponent } from './inghilterra/inghilterra.component';
import { ItaliaComponent } from './italia/italia.component';
import { RicercabandieraComponent } from './ricercabandiera/ricercabandiera.component';
import { SpagnaComponent } from './spagna/spagna.component';
import { UsaComponent } from './usa/usa.component';

const routes: Routes = [
  { 'path': '', component: HomeComponent},
  { 'path' : 'ricercabandiera', component: RicercabandieraComponent},
  { 'path' : 'brani', component: BraniComponent},
  { 'path' : 'artista', component: ArtistaComponent},
  { 'path' : 'italia', component: ItaliaComponent},
  { 'path' : 'francia', component: FranciaComponent},
  { 'path' : 'inghilterra', component: InghilterraComponent},
  { 'path' : 'spagna', component: SpagnaComponent},
  { 'path' : 'globale', component: GlobaleComponent},
  { 'path' : 'USA', component: UsaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
