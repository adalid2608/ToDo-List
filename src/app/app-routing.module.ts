import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "app",
    loadChildren: () => import ("./modules/todo/todo.module").then(m => m.TodoModule)
  },
  {
    path: "**",
    redirectTo: "app"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
