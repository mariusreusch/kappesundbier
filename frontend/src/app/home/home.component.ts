import { Component } from "@angular/core";
import { AuthenticationService } from "../authentication-service";

@Component({
  selector: 'cac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthenticationService]
})
export class HomeComponent {

  constructor(public authenticationService: AuthenticationService) {

  }

}
