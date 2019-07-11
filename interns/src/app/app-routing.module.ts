import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'beers',
    loadChildren: './pages/beers/beers.module#BeersModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // { preloadingStrategy: PreloadAllModules }
  exports: [RouterModule]
})
export class AppRoutingModule {}
