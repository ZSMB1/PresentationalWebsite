import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  subscriberEmail: string;
  subscriberList: string[];
  productList: Array<Object>;

  constructor(private http: HttpClient) {
    this.subscriberEmail = '';
    this.subscriberList = [];
    this.productList = [];

    http.get('https://jsonblob.com/api/jsonBlob/66e4be52-d17f-11ea-966b-953d6c5482db',
      {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .toPromise()
      .then((results: []) => {
        results.forEach((product) => {
          this.productList = [...this.productList, product];
        });
        return results;
      })
      .catch((err) => console.log(err));
  }

  addSubscriber = () => {
    if (this.subscriberEmail.length > 0) {
      this.subscriberList = [...this.subscriberList, this.subscriberEmail];
      this.subscriberEmail = '';
    }
  }
}
