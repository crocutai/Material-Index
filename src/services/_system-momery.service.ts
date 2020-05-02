import { Injectable } from "@angular/core";
import { Permission, PermissionsService } from "./_permissions.service";
declare var chrome: any;

export type SystemMemoryInfo = {
  capacity: number;
  availableCapacity: number;
};

@Injectable({
  providedIn: "root"
})
export class SystemMemoryService {
  private _api: Permission = { permissions: ["system.memory"] };

  isAvailable: boolean;
  capacity: number;
  available: number;
  usage: number;

  constructor(private _permission: PermissionsService) {
    setInterval(async event => {
      this.isAvailable = await this._permission.isContains(this._api);
      if (this.isAvailable) this.getInfo();
    }, 1000);
  }

  getInfo(): Promise<SystemMemoryInfo> {
    return new Promise((resolve, reject) => {
      chrome.system.memory.getInfo(resolve);
    }).then((_info: SystemMemoryInfo) => {
      this.capacity = _info.capacity;
      this.available = _info.availableCapacity;
      this.usage = this.capacity - this.available;
      return _info;
    });
  }
}
