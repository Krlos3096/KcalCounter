import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './calories-handler/Home/Home.component';
import { BusyLoaderComponent } from './calories-handler/BusyLoader/BusyLoader.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Estadisticas', component: BusyLoaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

