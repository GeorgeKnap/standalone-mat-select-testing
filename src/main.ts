import { VERSION as CDK_VERSION } from '@angular/cdk';
import { VERSION as MAT_VERSION } from '@angular/material/core';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { SelectHarnessExample } from './app/select-harness-example';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(SelectHarnessExample, {
  providers: [provideAnimations()],
});
