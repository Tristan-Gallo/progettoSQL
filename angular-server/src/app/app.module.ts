import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RicercabandieraComponent } from './ricercabandiera/ricercabandiera.component';
import { BraniComponent } from './brani/brani.component';
import { ArtistaComponent } from './artista/artista.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItaliaComponent } from './italia/italia.component';
import { FranciaComponent } from './francia/francia.component';
import { SpagnaComponent } from './spagna/spagna.component';
import { GlobaleComponent } from './globale/globale.component';
import { InghilterraComponent } from './inghilterra/inghilterra.component';
import { UsaComponent } from './usa/usa.component';
import { Artista2Component } from './artista2/artista2.component';
import { Top10Component } from './top10/top10.component';
import { Brani2Component } from './brani2/brani2.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RicercabandieraComponent,
    BraniComponent,
    ArtistaComponent,
    ItaliaComponent,
    FranciaComponent,
    SpagnaComponent,
    GlobaleComponent,
    InghilterraComponent,
    UsaComponent,
    Artista2Component,
    Top10Component,
    Brani2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
