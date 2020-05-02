import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "date-time",
  templateUrl: "./date-time.component.html"
})
export class DateTimeComponent implements OnDestroy {
  private _timer: number;
  now: number = Date.now();

  constructor() {
    this._timer = setInterval(event => {
      this.now = Date.now();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this._timer);
  }
}
