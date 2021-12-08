import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imported Component
import { ApplayoutComponent } from './layout/applayout/applayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : DashboardComponent ,
  },

  {
    path : '**',
    redirectTo : ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
