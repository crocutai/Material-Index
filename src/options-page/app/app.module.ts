import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//  Angular Material
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";

//  Components
import { AppRootComponent } from "./app-root.component";
import { PermissionsTabComponent } from "./permissions-tab/permissions-tab.component";

@NgModule({
  declarations: [AppRootComponent, PermissionsTabComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {}
