import { Component, Input, HostListener } from "@angular/core";
import { ChromeService, Processor } from "services/chrome.service";

@Component({
  selector: "system-cpu",
  templateUrl: "./system-cpu.component.html",
  host: {
    display: "flex",
    "flex-direction": "column"
  }
})
export class SystemcpuComponent {
  @Input() details: boolean;
  @HostListener("click") onClick() {
    this.details = !this.details;
  }

  constructor(public chrome: ChromeService) {}

  get archName(): string {
    return this.chrome.system.cpu.archName;
  }

  get features(): string[] {
    return this.chrome.system.cpu.features;
  }

  get modelName(): string {
    return this.chrome.system.cpu.modelName;
  }

  get processors(): Processor[] {
    return this.chrome.system.cpu.processors;
  }

  get temperatures(): number[] {
    return this.chrome.system.cpu.temperatures;
  }

  get user(): number {
    return this.processors
      ? this.processors.reduce((result, processor) => {
          result += processor.usage.user;
          return result;
        }, 0)
      : 0;
  }

  get kernel(): number {
    return this.processors
      ? this.processors.reduce((result, processor) => {
          result += processor.usage.kernel;
          return result;
        }, 0)
      : 0;
  }

  get idle(): number {
    return this.processors
      ? this.processors.reduce((result, processor) => {
          result += processor.usage.idle;
          return result;
        }, 0)
      : 0;
  }

  get total(): number {
    return this.processors
      ? this.processors.reduce((result, processor) => {
          result += processor.usage.total;
          return result;
        }, 0)
      : 0;
  }
}
