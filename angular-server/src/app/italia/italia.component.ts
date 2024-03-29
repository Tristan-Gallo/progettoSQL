import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-italia',
  templateUrl: './italia.component.html',
  styleUrls: ['./italia.component.css']
})
export class ItaliaComponent {
  citalia! : any;
  loading! : Boolean;
  url: string = "https://3245-tristangall-progettosql-5so8n1dwjqx.ws-eu84.gitpod.io/italia"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.citalia = data;
      this.loading = false;
    });
  }

  onKey(value: string) {
    this.get(this.url + "?citalia=" + value);
  }

}
