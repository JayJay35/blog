import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyDaJIT2Qi6IG4W-EAkUdZ6_C7kkEPQCdE8",
      authDomain: "blog-db22c.firebaseapp.com",
      databaseURL: "https://blog-db22c.firebaseio.com",
      projectId: "blog-db22c",
      storageBucket: "blog-db22c.appspot.com",
      messagingSenderId: "459817017338"
    };
    firebase.initializeApp(config);
  }
}
