import { Component } from '@angular/core';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'kub-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
