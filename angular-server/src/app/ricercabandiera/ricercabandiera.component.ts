import { Component } from '@angular/core';

@Component({
  selector: 'app-ricercabandiera',
  templateUrl: './ricercabandiera.component.html',
  styleUrls: ['./ricercabandiera.component.css']
})
export class RicercabandieraComponent {
  bandiera_italia: string;
  bandiera_francia: string;
  bandiera_inghilterra: string;
  bandiera_spagna: string;
  bandiera_usa: string;
  bandiera_globale: string;

  constructor(){
    this.bandiera_italia = './assets/images/italia.jpg'
    this.bandiera_francia = './assets/images/francia.jpg'
    this.bandiera_inghilterra = './assets/images/Inghilterra.jpg'
    this.bandiera_spagna = './assets/images/spagna.jpg'
    this.bandiera_usa = './assets/images/USA.png'
    this.bandiera_globale = './assets/images/globale.jpg'
   
  }
}
