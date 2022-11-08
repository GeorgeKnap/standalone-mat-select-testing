import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * @title Testing with MatSelectHarness
 */
@Component({
  standalone: true,
  imports: [
    MaterialExampleModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  selector: 'select-harness-example',
  templateUrl: 'select-harness-example.html',
})
export class SelectHarnessExample {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
