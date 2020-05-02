import { Injectable, OnInit } from "@angular/core";
import { PermissionsService } from "./_permissions.service";
import { SystemCPUService } from "./_system-cpu.service";
import { SystemMemoryService } from "./_system-momery.service";
import { SystemStorageService } from "./_system-storage.service";
import { DownloadsService } from './_downloads.service';

export { Permission } from "./_permissions.service";
export { Processor, SystemCPUInfo } from "./_system-cpu.service";
export { SystemMemoryInfo } from "./_system-momery.service";
export { SystemStorageUnitInfo } from "./_system-storage.service";

@Injectable({
  providedIn: "root"
})
export class ChromeService {
  system = {
    cpu: this.cpu,
    memory: this.memory,
    storage: this.storage
  };

  constructor(
    private cpu: SystemCPUService,
    private memory: SystemMemoryService,
    private storage: SystemStorageService,

    public downloads:DownloadsService,
    public permissions: PermissionsService
  ) {}
}
