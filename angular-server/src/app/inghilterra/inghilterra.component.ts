import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-inghilterra',
  templateUrl: './inghilterra.component.html',
  styleUrls: ['./inghilterra.component.css']
})
export class InghilterraComponent {
  cinghilterra! : any;
  loading! : Boolean;
  url: string = "https://3245-tristangall-progettosql-q3g84vdwdli.ws-eu83.gitpod.io/inghilterra"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.cinghilterra = data;
      this.loading = false;
    });
  }

  onKey(value: string) {
    this.get(this.url + "?cinghilterra=" + value);
  }

}
