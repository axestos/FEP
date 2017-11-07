import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser : {docent: boolean, username: string} = {docent: null, username: null};

  constructor(public authService: AuthService, private router: Router) {
    this.currentUser = authService.currentUser
  }

  ngOnInit() {
    // if (this.currentUser.username == null) {
    //   this.router.navigateByUrl('/');
    // }
  }

  logout() {
    this.authService.logout();
  }

}
