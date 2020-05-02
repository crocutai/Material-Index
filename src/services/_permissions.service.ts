import { Injectable } from "@angular/core";
declare let chrome: any;

export type Permission = {
  permissions?: string[];
  origins?: string[];
};

@Injectable({
  providedIn: "root"
})
export class PermissionsService {
  constructor() {}

  isContains(permission: Permission): Promise<boolean> {
    return new Promise((resolve, reject) => {
      chrome.permissions.contains(permission, resolve);
    });
  }

  request(permission: Permission): Promise<boolean> {
    return new Promise((resolve, reject) => {
      chrome.permissions.request(permission, resolve);
    });
  }

  remove(permission: Permission): Promise<boolean> {
    return new Promise((resolve, reject) => {
      chrome.permissions.remove(permission, resolve);
    });
  }
}
