import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'passwraith',
    pathMatch: 'full'
  },
  {
    path: 'passwraith',
    loadChildren: () => import('./passwraith/passwraith.module').then(m => m.PasswraithModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
