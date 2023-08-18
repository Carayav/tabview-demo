import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { TabPanel, TabView } from "primeng/tabview";

@Component({
  selector: "tab-view-basic-demo",
  templateUrl: "./tab-view-basic-demo.html",
})
export class TabViewBasicDemo {
  headerClass = "red";

  CambiarClaseHeader(tabView: TabView) {
    this.headerClass = this.headerClass === "red" ? "green" : "red";
    setTimeout(() => {
      tabView.cd.markForCheck();
    }, 0);
  }
}
