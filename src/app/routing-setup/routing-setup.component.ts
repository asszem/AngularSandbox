import { Component, OnInit } from '@angular/core';

// The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's bag of parameters extracted from the URL. The "id" parameter is the id of the hero to display.
import { ActivatedRoute } from '@angular/router';
// The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
import { Location } from '@angular/common';

@Component({
  selector: 'app-routing-setup',
  templateUrl: './routing-setup.component.html',
  styleUrls: ['./routing-setup.component.css']
})
export class RoutingSetupComponent implements OnInit {

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
