import { Injectable } from "@angular/core";
import { ChromeService, Permission } from "services/chrome.service";

declare let chrome: any;

@Injectable()
export class DownloadsService {
  private _permission: Permission = { permissions: ["downloads"] };
  private _timer: number;

  isAvailable: boolean;
  downloadItems: any[] = [];

  constructor(private chrome: ChromeService) {
    this.chrome.permissions.isContains(this._permission).then(result => {
      this.isAvailable = result;
    });
  }

  search(): Promise<any> {
    return new Promise((resolve, reject) => {
      chrome.downloads.search({ state: "in_progress" }, resolve);
    });
  }

  listen(): void {
    this._timer = setInterval(async event => {
      this.downloadItems = await this.search();
    }, 1000);
  }

  cancal(): void {
    clearInterval(this._timer);
  }
}
