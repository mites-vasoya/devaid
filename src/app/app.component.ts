import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from "./services/analytics.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'devaid';

  constructor(private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.analyticsService.trackEvent("landing_page_view", "Home page Loaded", "page_view")
  }
}
