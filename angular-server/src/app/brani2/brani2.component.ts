import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-brani2',
  templateUrl: './brani2.component.html',
  styleUrls: ['./brani2.component.css']
})
export class Brani2Component {
  top10brani! : any;
  url: string = "https://3245-tristangall-progettosql-5so8n1dwjqx.ws-eu84.gitpod.io/brani2"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.http.get(url).subscribe(data => {
      this.top10brani = data;
    });
  }


}
