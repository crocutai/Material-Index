import { Injectable, OnInit, OnDestroy } from "@angular/core";
import { Permission, PermissionsService } from "./_permissions.service";
declare var chrome: any;

export type SystemStorageUnitInfo = {
  id: number;
  name: string;
  type: string;
  capacity: number;
};

@Injectable({
  providedIn: "root"
})
export class SystemStorageService {
  private _api: Permission = { permissions: ["system.storage"] };

  isAvailable: boolean;
  units: SystemStorageUnitInfo[];

  constructor(private _permission: PermissionsService) {
    setInterval(async event => {
      this.isAvailable = await this._permission.isContains(this._api);
      if (this.isAvailable) this.getInfo();
    }, 1000);
  }

  getInfo(): Promise<SystemStorageUnitInfo[]> {
    return new Promise((resolve, reject) => {
      chrome.system.storage.getInfo(resolve);
    }).then((_units: SystemStorageUnitInfo[]) => {
      this.units = _units;
      return _units;
    });
  }
}
