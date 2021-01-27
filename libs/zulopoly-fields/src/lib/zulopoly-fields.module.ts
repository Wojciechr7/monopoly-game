import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldDirective } from './directives/field.directive';
import { InputFieldComponent } from './components/input-filed/input-field.component';
import { InputTextModule } from 'primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './containers/field/field.component';
import { FormComponent } from './containers/form/form.component';
import { BoardModule } from '../../../../apps/zulopoly/src/app/modules/board/board.module';

@NgModule({
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, BoardModule],
  declarations: [ FieldDirective, InputFieldComponent, FieldComponent, FormComponent]
})
export class ZulopolyFieldsModule {}
