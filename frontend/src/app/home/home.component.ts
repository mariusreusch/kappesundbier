import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication-service";
import { HomeService } from "./home.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'cac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  user: any;

  ngOnInit(): void {
    this.homeService.getUser().subscribe(user => {
      console.log(user);
      return this.user = user;
    });
  }

  constructor(private homeService: HomeService) {

  }
}
