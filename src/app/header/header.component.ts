import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    auth().onAuthStateChanged(
      (user) => {
        this.isAuth = (user) ? true : false;
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }
}
