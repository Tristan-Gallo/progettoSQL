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
    UsaComponent
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
