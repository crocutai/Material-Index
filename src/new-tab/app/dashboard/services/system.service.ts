import { Injectable } from "@angular/core";

import { SystemCPUService } from "./_system-cpu.class";
import { SystemMemoryService } from "./_system-momery.class";

export { Processor, SystemCPUInfo } from "./_system-cpu.class";
export { SystemMemoryInfo } from "./_system-momery.class";

@Injectable()
export class SystemService {
  constructor(public cpu: SystemCPUService, public memory: SystemMemoryService) {}
}
