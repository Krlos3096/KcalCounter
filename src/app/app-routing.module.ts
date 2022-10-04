import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusyLoaderComponent } from './calories-handler/BusyLoader/BusyLoader.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./calories-handler/calories-handler.module').then(m => m.CaloriesHandlerModule) },
  { path: 'Estadisticas', component: BusyLoaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

