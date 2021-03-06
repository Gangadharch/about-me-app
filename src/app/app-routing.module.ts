import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component'

const routes: Routes = [
  {
    path: 'aboutme',
    loadChildren: () => import('./component/myinfo/myinfo.module').then(m => m.MyinfoModule)
  },
  
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
