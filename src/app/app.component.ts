import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  subscriberList = [];

  addSubscriber(newSubscriber : HTMLInputElement) {
    if (newSubscriber.value.length > 0) {
      this.subscriberList = [...this.subscriberList, newSubscriber.value];
      newSubscriber.value = '';
    }
  }
}
