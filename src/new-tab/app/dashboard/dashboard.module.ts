import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//  Angular Modules
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

//  Services
import { DownloadsService } from "./services/downloads.service";
import { SystemService } from "./services/system.service";
import { SystemMemoryService } from "./services/_system-momery.class";
import { SystemCPUService } from "./services/_system-cpu.class";
import { TabsService } from "./services/tabs.service";

//  Components
import { DashboardComponent } from "./dashboard.component";
import { DownloadsComponent } from "./downloads/downloads.component";
import { PermissionDeniedComponent } from "./permission-denied/permission-denied.component";
import { ProcessesInfoComponent } from "./processes-info/processes-info.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { SystemcpuComponent } from "./system-cpu/system-cpu.component";
import { SystemInfoComponent } from "./system-info/system-info.component";
import { SystemMemoryComponent } from "./system-memory/system-memory.component";

//  Pipes
import { StorageSizePipe } from "pipes/storage-size.pipe";

@NgModule({
  declarations: [
    DashboardComponent,
    DownloadsComponent,
    PermissionDeniedComponent,
    ProcessesInfoComponent,
    SearchBarComponent,
    SystemcpuComponent,
    SystemInfoComponent,
    SystemMemoryComponent,
    StorageSizePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [DashboardComponent],
  providers: [
    DownloadsService,
    SystemService,
    SystemCPUService,
    SystemMemoryService,
    TabsService
  ]
})
export class DashboardModule {}
