import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({

  selector: 'kub-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService, public router: Router) {
    this.login();
  }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl;
        if (redirect) {
          this.router.navigate([redirect]);
        }
        this.router.navigate(['/']);
      }
    });
  }
}
