import { Component, HostBinding } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app-root.component.html",
  styleUrls: ["./app-root.component.scss"]
})
export class AppRootComponent {
  @HostBinding("attr.orientation")
  get orientation(): string {
    switch (true) {
      case window.innerHeight > window.innerWidth:
        return "portrait";

      case window.innerWidth > window.innerHeight:
        return "landscape";

      case window.innerWidth === window.innerHeight:
        return "square";

      default:
        return "landscape";
    }
  }
}
