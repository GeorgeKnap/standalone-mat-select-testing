import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSelectHarness } from '@angular/material/select/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { SelectHarnessExample } from './select-harness-example';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SelectHarnessExample', () => {
  let fixture: ComponentFixture<SelectHarnessExample>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.overrideComponent(SelectHarnessExample, {
      set: {
        imports: [
          MaterialExampleModule,
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
        ],
      },
    })
      .configureTestingModule({
        imports: [SelectHarnessExample, NoopAnimationsModule],
        declarations: [],
      })
      .compileComponents();
    fixture = TestBed.createComponent(SelectHarnessExample);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should load all select harnesses', async () => {
    const selects = await loader.getAllHarnesses(MatSelectHarness);
    expect(selects.length).toBe(1);
  });

  it('should be able to check whether a select is in multi-selection mode', async () => {
    const select = await loader.getHarness(MatSelectHarness);

    expect(await select.isMultiple()).toBe(false);
  });

  it('should be able to open and close a select', async () => {
    const select = await loader.getHarness(MatSelectHarness);

    expect(await select.isOpen()).toBe(false);

    await select.open();
    expect(await select.isOpen()).toBe(true);

    await select.close();
    expect(await select.isOpen()).toBe(false);
  });

  it('should be able to get the value text from a select', async () => {
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    const options = await select.getOptions();

    await options[2].click();

    expect(await select.getValueText()).toBe('Tacos');
  });
});

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
