import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app-root.component.html",
  host: {
    display: "flex",
    "flex-direction": "column",
    "min-height": "25",
    "max-height": "100",
    padding: "2",
    overflow: "hidden",
    "box-sizing": "border-box"
  }
})
export class AppRootComponent {}
