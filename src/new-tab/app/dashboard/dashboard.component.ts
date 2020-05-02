import { Component } from "@angular/core";
import { ChromeService } from "services/chrome.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styles: [":host ::ng-deep .mat-tab-label { min-width: 48px !important; }"],
  host: {
    display: "flex",
    "flex-direction": "column",
    width: "auto",
    "max-height": "100",
  }
})
export class DashboardComponent {
  constructor(public chrome: ChromeService) {}
}
