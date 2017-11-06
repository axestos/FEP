import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser : {docent: boolean, username: string} = {docent: null, username: null};

  constructor(public authService: AuthService) {
    this.currentUser = authService.currentUser
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
