import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'kub-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.homeService.getUser().subscribe(user => {
      return this.user = user;
    });
  }
}
