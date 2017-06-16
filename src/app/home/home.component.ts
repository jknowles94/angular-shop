import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	title = 'New Season Arrivals';
  subHeading = 'Check out all the new trends';

  constructor() { }

  ngOnInit() {
  }

}
