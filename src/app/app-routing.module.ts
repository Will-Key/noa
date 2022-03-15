import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/guards/auth.guard';
import { RedirectHomeGuard } from './features/auth/guards/redirect-home.guard';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'auth', canActivate: [RedirectHomeGuard], loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)},
  {path: 'dashboard', canActivate:[AuthGuard], loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
