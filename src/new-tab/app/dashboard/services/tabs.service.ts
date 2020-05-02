import { Injectable } from "@angular/core";
import { ChromeService, Permission } from "services/chrome.service";

declare let chrome: any;

type Tab = {};

@Injectable()
export class TabsService {
  private _permission: Permission = { permissions: ["tabs"] };
  isAvailable: boolean;

  constructor(private chrome: ChromeService) {
    this.chrome.permissions.isContains(this._permission).then(result => {
      this.isAvailable = result;
    });
  }

  query(queryInfo?: object): Promise<Tab[]> {
    return new Promise((resolve, reject) => {
      chrome.tabs.query(queryInfo ?? {}, resolve);
    });
  }

  show(id: number): void {
    chrome.tabs.update(id, { selected: true });
  }
}
