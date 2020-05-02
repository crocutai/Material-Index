import { Injectable, OnInit, OnDestroy } from "@angular/core";
import { Permission, PermissionsService } from "./_permissions.service";
declare var chrome: any;

export type SystemCPUInfo = {
  archName: string;
  features: string[];
  modelName: string;
  processors: any[];
  temperatures: number[];
};

export type Processor = {
  usage: {
    user: number;
    kernel: number;
    idle: number;
    total: number;
  };
};

@Injectable({
  providedIn: "root"
})
export class SystemCPUService {
  private _api: Permission = { permissions: ["system.cpu"] };

  isAvailable: boolean;

  archName: string;
  features: string[];
  modelName: string;
  processors: Processor[];
  temperatures: number[];

  constructor(private _permission: PermissionsService) {
    setInterval(async event => {
      this.isAvailable = await this._permission.isContains(this._api);
      if (this.isAvailable) this.getInfo();
    }, 1000);
  }

  getInfo(): Promise<SystemCPUInfo> {
    return new Promise((resolve, reject) => {
      chrome.system.cpu.getInfo(resolve);
    }).then((_info: SystemCPUInfo) => {
      this.archName = _info.archName;
      this.features = _info.features;
      this.modelName = _info.modelName;
      this.processors = _info.processors;
      this.temperatures = _info.temperatures;
      return _info;
    });
  }
}
