import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CaloriesHandlerRoutingModule } from './calories-handler-routing.module';
// Components Imports
import { BusyLoaderComponent } from './BusyLoader/BusyLoader.component';
import { InformationDialogComponent, DialogForm } from './InformationDialog/InformationDialog.component';
import { MacroNutrientCardComponent } from './MacroNutrientCard/MacroNutrientCard.component';
import { ProgressBarComponent } from './ProgressBar/ProgressBar.component';
import { HomeComponent } from './Home/Home.component'
// Angular Material Imports
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BusyLoaderComponent,
    InformationDialogComponent,
    DialogForm,
    MacroNutrientCardComponent,
    ProgressBarComponent,
    HomeComponent
  ],
  imports: [
    CaloriesHandlerRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    BusyLoaderComponent,
    InformationDialogComponent,
    DialogForm,
    MacroNutrientCardComponent,
    ProgressBarComponent,
    HomeComponent
  ]
})
export class CaloriesHandlerModule { }
