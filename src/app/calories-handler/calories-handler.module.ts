import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Components Imports
import { BusyLoaderComponent } from './BusyLoader/BusyLoader.component';
import { TitleComponent } from './Title/Title.component';
import { InformationDialogComponent, DialogForm } from './InformationDialog/InformationDialog.component';
import { MacroNutrientCardComponent } from './MacroNutrientCard/MacroNutrientCard.component';
import { ProgressBarComponent } from './ProgressBar/ProgressBar.component';
// Angular Material Imports
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    BusyLoaderComponent,
    TitleComponent,
    InformationDialogComponent,
    DialogForm,
    MacroNutrientCardComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [
    BusyLoaderComponent,
    TitleComponent,
    InformationDialogComponent,
    DialogForm,
    MacroNutrientCardComponent,
    ProgressBarComponent
  ]
})
export class CaloriesHandlerModule { }
