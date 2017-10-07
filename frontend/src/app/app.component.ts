import { Component } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kub-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService, private translateService: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('de');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('de');
  }

  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}
