import { Component, Input, OnInit } from '@angular/core';
import { FormModel } from '../../common/form.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'zulopoly-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  formConfig: FormModel;

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.loadForm(this.formConfig);
  }

  getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private loadForm({fields}: FormModel): FormGroup {
    const fg = this.fb.group([]);

    fields.forEach(f => {
      fg.addControl(f.name, this.fb.control('', f.validators));
    })

    return fg;
  }

}
