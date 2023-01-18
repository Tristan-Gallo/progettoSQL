import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import  {HttpClientModule} from "@angular/common/http";
import { NazioniComponent } from './nazioni/nazioni.component'

@NgModule({
  declarations: [
    AppComponent,
    NazioniComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
