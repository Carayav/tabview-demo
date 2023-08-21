import { Component, ViewChild } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: "tab-view-basic-demo",
  templateUrl: "./tab-view-basic-demo.html",
})
export class TabViewBasicDemo {
  @ViewChild("ModalForm") ModalForm: NgForm;

  public Invalid(): boolean {
    const pestanhaFormGroup: FormGroup = <FormGroup>(
      this.ModalForm?.form.controls["modelGroup"]
    );
    const controles = pestanhaFormGroup?.controls || {};
    return Object.keys(controles)
      .map((nombreControl: string) => controles[nombreControl])
      .filter((control) => control.errors?.required)
      .some((control) => control.invalid && control.touched);
  }
}
