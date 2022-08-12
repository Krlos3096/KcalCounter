import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyLoaderComponent } from './BusyLoader/BusyLoader.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'


@NgModule({
  declarations: [
    BusyLoaderComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BusyLoaderComponent
  ]
})
export class CaloriesHandlerModule { }
