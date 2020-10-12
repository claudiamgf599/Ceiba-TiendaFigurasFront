import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarPreordenablesComponent } from './feature/figuras/components/listar-preordenable/listar-preordenables.component';
import { ListarPreordenesComponent } from './feature/preordenes/components/listar-preordenes/listar-preordenes.component';
import { FormClienteComponent } from './feature/figuras/components/form-cliente/form-cliente.component';
import { config } from 'process';

const routes: Routes = [
  { path: '', redirectTo: '/figuras', pathMatch: 'full' },
  { path: 'figuras', component: ListarPreordenablesComponent },
  { path: 'preordenes/:idCliente', component: ListarPreordenesComponent },
  { path: 'cliente/form', component: FormClienteComponent },
  { path: 'cliente/form/:idFigura', component: FormClienteComponent },
  { path: 'preordenes/form', component: ListarPreordenesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
