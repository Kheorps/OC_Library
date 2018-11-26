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
      apiKey: 'AIzaSyBjf1qX04xHlOayMKRB5fgejnih9nRGQ-s',
      authDomain: 'oc-library-4f308.firebaseapp.com',
      databaseURL: 'https://oc-library-4f308.firebaseio.com',
      projectId: 'oc-library-4f308',
      storageBucket: 'oc-library-4f308.appspot.com',
      messagingSenderId: '873839750526'
    };
    firebase.initializeApp(config);
  }
}
