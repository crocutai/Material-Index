import { Injectable } from "@angular/core";
import { ChromeService, Permission } from "services/chrome.service";

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

@Injectable()
export class SystemCPUService {
  private _permission: Permission = { permissions: ["system.cpu"] };
  private _timer: number;

  isAvailable: boolean;
  archName: string;
  features: string[];
  modelName: string;
  processors: Processor[];
  temperatures: number[];

  constructor(private chrome: ChromeService) {
    this.chrome.permissions.isContains(this._permission).then(result => {
      this.isAvailable = result;
    });
  }

  getInfo(): Promise<SystemCPUInfo> {
    return new Promise((resolve, reject) => {
      chrome.system.cpu.getInfo(resolve);
    });
  }

  listen(): void {
    this._timer = setInterval(async event => {
      let _info = await this.getInfo();
      this.archName = _info.archName;
      this.features = _info.features;
      this.modelName = _info.modelName;
      this.processors = _info.processors;
      this.temperatures = _info.temperatures;
    }, 1000);
  }

  cancal(): void {
    clearInterval(this._timer);
  }
}
