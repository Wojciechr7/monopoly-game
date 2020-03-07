import {Component, Input, OnInit} from '@angular/core';
import {BoardFieldModel} from "../../models/board-field.model";

@Component({
  selector: 'zulopoly-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() field: BoardFieldModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  test() {
    console.log(this.field);
  }

}
