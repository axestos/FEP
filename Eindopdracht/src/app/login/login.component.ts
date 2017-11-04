import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
  }
  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  error = {
    message : null
  }

  login() {
    this.error.message = null;
      this.authService.login(this.email, this.password, this.error);
      this.password = '';
    }

    logout() {
      this.authService.logout();
    }
}
