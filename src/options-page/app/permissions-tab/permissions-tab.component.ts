import { Component } from "@angular/core";
import { ChromeService } from "services/chrome.service";

type Option = {
  icon: string;
  label: string;
  api: string[];
  isAvailable: boolean;
};

let options: Option[] = [
  {
    icon: "data_usage",
    label: "RAM Usage",
    api: ["system.memory"],
    isAvailable: false
  },
  {
    icon: "memory",
    label: "CPU Information",
    api: ["system.cpu"],
    isAvailable: false
  },
  {
    icon: "storage",
    label: "System Storage",
    api: ["system.storage"],
    isAvailable: false
  },
  {
    icon: "get_app",
    label: "Downloads",
    api: ["downloads"],
    isAvailable: false
  },
  {
    icon: "layers",
    label: "Tabs",
    api: ["tabs"],
    isAvailable: false
  }
];

@Component({
  selector: "permissions-tab",
  templateUrl: "./permissions-tab.component.html",
  host: {
    display: "flex",
    "flex-direction": "column",
    "min-height": "25",
    "max-height": "100",
    "overflow-x": "hidden",
    "overflow-y": "auto"
  }
})
export class PermissionsTabComponent {
  options: Option[] = options;

  constructor(private chrome: ChromeService) {
    this.update();
  }

  update(): void {
    this.options.forEach(async option => {
      option.isAvailable = await this.chrome.permissions.isContains({
        permissions: option.api
      });
    });
  }

  toggle(option: Option): void {
    switch (option.isAvailable) {
      case true:
        this.chrome.permissions.remove({ permissions: option.api });
        break;

      case false:
      default:
        this.chrome.permissions.request({ permissions: option.api });
    }

    this.update();
  }
}
