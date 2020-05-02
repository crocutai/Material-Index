import { Injectable } from "@angular/core";
import { Permission, PermissionsService } from "./_permissions.service";

declare let chrome: any;

@Injectable({
  providedIn: "root"
})
export class DownloadsService {
  private _api: Permission = { permissions: ["downloads"] };
  private _timer: number;

  isAvailable: boolean;
  downloadItems: any[] = [];

  constructor(private _permission: PermissionsService) {
    setInterval(async event => {
      this.isAvailable = await this._permission.isContains(this._api);
      if (this.isAvailable) this.search();
    }, 1000);
  }

  search(): Promise<any> {
    return new Promise((resolve, reject) => {
      chrome.downloads.search({ state: "in_progress" }, resolve);
    }).then((_downloadItems: any[]) => {
      this.downloadItems = _downloadItems;
      return _downloadItems;
    });
  }

  getFileIcon(downloadId, options?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      chrome.downloads.getFileIcon(downloadId, options, resolve);
    });
  }
}
