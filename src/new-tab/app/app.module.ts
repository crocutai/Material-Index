import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DashboardModule } from "./dashboard/dashboard.module";

import { AppRootComponent } from "./app-root.component";
import { DateTimeComponent } from "./date-time/date-time.component";

@NgModule({
  declarations: [AppRootComponent, DateTimeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DashboardModule],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule {}
