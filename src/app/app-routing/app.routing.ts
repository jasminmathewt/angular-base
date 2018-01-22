import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from '../core/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  //{ path: 'eager', component: EagerComponent },
  { 
    path: 'public', 
    loadChildren: '../public/public.module#PublicModule' 
  },
  { 
    path: 'admin', 
    canActivate: [AuthGuard],
    loadChildren: '../admin/admin.module#AdminModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }