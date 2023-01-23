import { Component } from '@angular/core';
import { constructor } from 'jasmine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logo!: string;
  
}

constructor();{
  
  this.logo = './assets/images/logo.png'
  
  }
}
