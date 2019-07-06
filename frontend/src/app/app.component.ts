import {Component, OnInit} from '@angular/core';
import {AuthService} from './authentication/auth.service';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from './authentication/user.service';
import {User} from './authentication/user';

@Component({
  selector: 'kub-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private translateService: TranslateService, private userService: UserService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('de');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('de');
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
