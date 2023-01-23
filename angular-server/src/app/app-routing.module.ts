import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './artista/artista.component';
import { Artista2Component } from './artista2/artista2.component';
import { BraniComponent } from './brani/brani.component';
import { Brani2Component } from './brani2/brani2.component';
import { FranciaComponent } from './francia/francia.component';
import { GlobaleComponent } from './globale/globale.component';
import { HomeComponent } from './home/home.component';
import { InghilterraComponent } from './inghilterra/inghilterra.component';
import { ItaliaComponent } from './italia/italia.component';
import { RicercabandieraComponent } from './ricercabandiera/ricercabandiera.component';
import { SpagnaComponent } from './spagna/spagna.component';
import { Top10Component } from './top10/top10.component';
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
  { 'path' : 'USA', component: UsaComponent},
  { 'path' : 'top10', component: Top10Component},
  { 'path' : 'artista2', component: Artista2Component},
  { 'path' : 'brani2', component: Brani2Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
