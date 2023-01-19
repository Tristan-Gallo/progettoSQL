import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { RicercabandieraComponent } from './ricercabandiera/ricercabandiera.component';

const routes: Routes = [
  { 'path': '', component: HomeComponent},
  { 'path' : 'ricerca', component: RicercaComponent},
  { 'path' : 'ricercabandiera', component: RicercabandieraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
