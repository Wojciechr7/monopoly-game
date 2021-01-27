import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export abstract class BaseField<T> {

  field: T;

  control: FormControl;

  protected constructor() { }

}
