import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuleftComponent } from './components/menuleft/menuleft.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
            path: '',
            component: MenuleftComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    MenuleftComponent,
    DashboardComponent
  ],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
