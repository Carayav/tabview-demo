import {
  ContentChild,
  Directive,
  HostListener,
  Input,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { TabView } from "primeng/tabview";

@Directive({
  selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
})
export class FormSubmitDirective {
  @ContentChild(TabView) tabView: TabView;

  constructor(private ngForm: NgForm) {}

  @HostListener("ngSubmit", ["$event"])
  onFormSubmit(event: Event) {
    if (!this.tabView || !event) return;
    this.ngForm.control.markAllAsTouched();
    this.tabView.cd.markForCheck();
    console.log("FormSubmitDirective.onFormSubmit", event);
  }
}
