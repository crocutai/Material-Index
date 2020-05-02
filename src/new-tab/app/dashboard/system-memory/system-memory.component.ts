import { Component, OnDestroy, Input } from "@angular/core";
import { ChromeService } from "services/chrome.service";

@Component({
  selector: "system-memory",
  templateUrl: "./system-memory.component.html",
  host: {
    display: "flex",
    "flex-direction": "column"
  }
})
export class SystemMemoryComponent {
  @Input() details: boolean;
  constructor(public chrome: ChromeService) {}

  get total(): number {
    return this.chrome.system.memory.capacity;
  }

  get available(): number {
    return this.chrome.system.memory.available;
  }

  get usage(): number {
    return this.total - this.available;
  }
}
