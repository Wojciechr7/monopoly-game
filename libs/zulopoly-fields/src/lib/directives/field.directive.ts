import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseFieldModel } from '../common/base-field.model';
import { FieldTypeEnum } from '../../../../api-interfaces/src/lib/enums/fields/field-type.enum';
import { FieldTypes } from '../common/field-types';
import { InputFieldComponent } from '../components/input-filed/input-field.component';

@Directive({
  selector: '[zulopolyField]'
})
export class FieldDirective implements OnInit {

  @Input()
  control: FormControl;

  @Input()
  config: BaseFieldModel;

  component: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private containerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    const component = this.getComponentByFieldType(this.config.fieldType);
    const factory = this.resolver.resolveComponentFactory<any>(component);

    this.component = this.containerRef.createComponent(factory);
    this.component.instance.field = this.config;
    this.component.instance.control = this.control;
  }

  getComponentByFieldType(type: FieldTypes) {
    switch (type) {
      case FieldTypes.Input: return InputFieldComponent;
      default: return InputFieldComponent;
    }
  }

}
