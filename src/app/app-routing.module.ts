import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // path : '',
    path: "date",
    loadChildren: "./date/date.module#DateModule"
  },
  {
    // path : '',
    path: "result/:id",
    loadChildren: "./result/result.module#ResultModule"
  },
  {
    path: "**",
    redirectTo: "date"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
