import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { RicercabandieraComponent } from './ricercabandiera/ricercabandiera.component';
import { BraniComponent } from './brani/brani.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RicercaComponent,
    RicercabandieraComponent,
    BraniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
