import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './components/connect/connect.component';
import { HomeComponent } from './components/home/home.component';
import { ImportWalletComponent } from './components/import-wallet/import-wallet.component';
import { InitializeComponent } from './components/initialize/initialize.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'connect', component: ConnectComponent},
  { path: 'start', component: StartComponent},
  { path: 'import-wallet', component: ImportWalletComponent},
  { path: 'initialize', component: InitializeComponent},
  { path: '**',   redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
