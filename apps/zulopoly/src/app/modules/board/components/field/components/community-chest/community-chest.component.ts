import {Component, Input, OnInit} from '@angular/core';
import {FieldBase} from "../base/field-base";
import {FieldBaseModel} from "../../../../../../../../../../libs/api-interfaces/src/lib/models/fields/field-base.model";

@Component({
  selector: 'zulopoly-community-chest',
  templateUrl: './community-chest.component.html',
  styleUrls: ['./community-chest.component.scss']
})
export class CommunityChestComponent extends FieldBase implements OnInit {

  @Input() field: FieldBaseModel;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
