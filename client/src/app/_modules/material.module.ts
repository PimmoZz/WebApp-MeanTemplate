import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
  MatExpansionModule, MatTabsModule, MatCardModule, MatSlideToggleModule, MatProgressBarModule,
  MatFormFieldModule, MatDialogModule, MatInputModule,
} from '@angular/material';

// Add here for auto import and adding to NgModule
const matModules = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatTabsModule,
  MatCardModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }

