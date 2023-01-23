import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-brani',
  templateUrl: './brani.component.html',
  styleUrls: ['./brani.component.css']
})
export class BraniComponent {
  titoloc! : any;
  loading! : Boolean;
  url: string = "https://3245-tristangall-progettosql-ex81yqcvwuk.ws-eu83.gitpod.io/brani"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.titoloc = data;
      this.loading = false;
    });
  }

  onKey(value: string) {
    this.get(this.url + "?titoloc=" + value);
  }
}
