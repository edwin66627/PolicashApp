import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'ahorrar', loadChildren: () => import('./pages/ahorrar/ahorrar.module').then( m => m.AhorrarPageModule)},
  { path: 'principal', loadChildren: () => import('./pages/pricipal/pricipal.module').then( m => m.PricipalPageModule)},
  { path: 'retirar', loadChildren: () => import('./pages/retirar/retirar.module').then( m => m.RetirarPageModule)},
  { path: 'transferir', loadChildren: () => import('./pages/transferir/transferir.module').then( m => m.TransferirPageModule)},
  { path: 'pagar', loadChildren: () => import('./pages/agregar/agregar.module').then( m => m.AgregarPageModule)},
  { path: 'movimientos', loadChildren: () => import('./pages/movimientos/movimientos.module').then( m => m.MovimientosPageModule)},
  { path: 'registrar', loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)},
  {
    path: 'visor',
    loadChildren: () => import('./pages/visor/visor.module').then( m => m.VisorPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
