import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  HostListener
} from "@angular/core";
import { ChromeService } from "services/chrome.service";

@Component({
  selector: "system-info",
  templateUrl: "./system-info.component.html",
  host: {
    display: "flex",
    "flex-direction": "column"
  }
})
export class SystemInfoComponent {
  @Input() details: boolean;
  @HostListener("click") onClick() {
    this.details = !this.details;
  }

  cpu = this.chrome.system.cpu;
  memory = this.chrome.system.memory;
  storage = this.chrome.system.storage;

  os: string;
  platform: string = window.navigator.platform;
  screen: Screen = window.screen;
  languages: readonly string[] = window.navigator.languages;

  constructor(private chrome: ChromeService) {
    let _navigator = window.navigator;
    let _userAgent = _navigator.userAgent;

    switch (true) {
      case _userAgent.includes("Windows NT 10.0"):
        this.os = "Windows 10";
        break;
      case _userAgent.includes("Windows NT 6.2"):
        this.os = "Windows 8";
        break;
      case _userAgent.includes("Windows NT 6.1"):
        this.os = "Windows 7";
        break;
      case _userAgent.includes("Windows NT 6.0"):
        this.os = "Windows Vista";
        break;
      case _userAgent.includes("Windows NT 5.1"):
        this.os = "Windows XP";
        break;
      case _userAgent.includes("Mac"):
        this.os = "Mac";
        break;
      case _userAgent.includes("CrOS"):
        this.os = "Chrome OS";
        break;
      case _userAgent.includes("X11"):
        this.os = "Linux";
        break;
    }
  }
}
