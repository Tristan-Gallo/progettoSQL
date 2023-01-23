import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-spagna',
  templateUrl: './spagna.component.html',
  styleUrls: ['./spagna.component.css']
})
export class SpagnaComponent {
  cspagna! : any;
  loading! : Boolean;
  url: string = "https://3245-tristangall-progettosql-ex81yqcvwuk.ws-eu83.gitpod.io/spagna"

  constructor(public http: HttpClient) {
    this.get(this.url);
  }

  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.cspagna = data;
      this.loading = false;
    });
  }

  onKey(value: string) {
    this.get(this.url + "?cspagna=" + value);
  }

}
