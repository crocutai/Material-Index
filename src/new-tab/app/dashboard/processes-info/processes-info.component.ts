import { Component, OnDestroy, OnInit } from "@angular/core";
import { ChromeService } from "services/chrome.service";

@Component({
  selector: "processes-info",
  templateUrl: "./processes-info.component.html",
  host: {
    width: "auto",
    "min-height": "25",
    height: "auto"
  }
})
export class ProcessesInfoComponent implements OnInit {
  isAvailable: boolean;

  constructor(private chrome: ChromeService) {}

  async ngOnInit(): Promise<void> {
    /* //this.isAvailable = await this.chrome.system.cpu.isAvailable;

    if (this.isAvailable) {
    } */
  }
}
