import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginLayoutComponent} from "./layouts/login-layout/login-layout.component";
import {LoginLayoutModule} from "./layouts/login-layout/login-layout.module";
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: 'login',
    component: LoginLayoutComponent,
    // canActivate : [AuthGuard],
    },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
