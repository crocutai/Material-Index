import { Component, Input, HostListener } from "@angular/core";
import { ChromeService } from "services/chrome.service";

@Component({
  selector: "downloads",
  templateUrl: "./downloads.component.html",
  host: {
    display: "flex",
    "flex-direction": "column"
  }
})
export class DownloadsComponent {
  @Input() details: boolean;
  @HostListener("click") onClick() {
    this.details = !this.details;
  }

  private _cache: any = [];

  private downloads = this.chrome.downloads;

  constructor(private chrome: ChromeService) {}

  get downloadItems() {
    return this.downloads.downloadItems.map(downloadItem => {
      downloadItem.directory = downloadItem.filename;
      downloadItem.filename = downloadItem.filename.split("/").pop();
      return downloadItem;
    });
  }

  get dataReceived(): number {
    return this.downloads.downloadItems.reduce((result, downloadItem) => {
      result += downloadItem.bytesReceived;
      return result;
    }, 0);
  }
}
