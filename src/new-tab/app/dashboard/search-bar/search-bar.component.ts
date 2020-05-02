import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { TabsService } from "../services/tabs.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
  @Input() value;

  tabs: any[] = [];
  urls: any[] = [];
  constructor(private _tabs: TabsService, private http: HttpClient) {}

  async ngOnInit() {}

  onChange(): void {
    this.updateTabs();
    this.updateUrls();
  }

  async updateTabs(): Promise<void> {
    let _tabs: any[] = await this._tabs.query();
    this.tabs = _tabs.filter(_tab => {
      return (
        _tab.title.toLowerCase().includes(this.value.toLowerCase()) ||
        _tab.url.toLowerCase().includes(this.value.toLowerCase())
      );
    });
  }

  async updateUrls(): Promise<void> {
    this.http
      .get(
        `https://www.google.com/complete/search?client=chrome&q=${this.value}`
      )
      .subscribe((result: any[]) => {
        this.urls = result[1];
      });
  }

  openTab(id): void {
    this._tabs.show(id);
  }

  openUrl(url): void {
    window.open(
      url.includes("http") ? url : `https://google.com/search?q=${url}`,
      url
    );
  }
}
