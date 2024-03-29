import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-globale',
  templateUrl: './globale.component.html',
  styleUrls: ['./globale.component.css']
})
export class GlobaleComponent {
  cglobale! : any;
  loading! : Boolean;
  url: string = "https://3245-tristangall-progettosql-5so8n1dwjqx.ws-eu84.gitpod.io/globale"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.cglobale = data;
      this.loading = false;
    });
  }

  onKey(value: string) {
    this.get(this.url + "?cglobale=" + value);
  }

}

