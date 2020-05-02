import { Injectable } from "@angular/core";
import { ChromeService, Permission } from "services/chrome.service";

declare var chrome: any;
export type SystemMemoryInfo = {
  capacity: number;
  availableCapacity: number;
};

@Injectable()
export class SystemMemoryService {
  private _permission: Permission = { permissions: ["system.memory"] };
  private _timer: number;

  isAvailable: boolean;
  capacity: number;
  available: number;
  usage: number;

  constructor(private chrome: ChromeService) {
    this.chrome.permissions.isContains(this._permission).then(result => {
      this.isAvailable = result;
    });
  }

  getInfo(): Promise<SystemMemoryInfo> {
    return new Promise((resolve, reject) => {
      chrome.system.memory.getInfo(resolve);
    });
  }

  listen(): void {
    this._timer = setInterval(async event => {
      let _info = await this.getInfo();
      this.capacity = _info.capacity;
      this.available = _info.availableCapacity;
      this.usage = this.capacity - this.available;
    }, 1000);
  }

  cancal(): void {
    clearInterval(this._timer);
  }
}
