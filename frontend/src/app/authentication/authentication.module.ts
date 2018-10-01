import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    TranslateModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthService,
    UserService
  ]
})
export class AuthenticationModule {
}
