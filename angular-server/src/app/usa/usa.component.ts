import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent {
  cusa! : any;
  loading! : Boolean;
  url: string = "https://3245-tristangall-progettosql-5so8n1dwjqx.ws-eu84.gitpod.io/USA"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.cusa = data;
      this.loading = false;
    });
  }

  onKey(value: string) {
    this.get(this.url + "?cusa=" + value);
  }
}
