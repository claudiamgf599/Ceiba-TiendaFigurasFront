import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPreordenablesComponent } from './components/listar-preordenable/listar-preordenables.component';
import { FiguraService } from './shared/service/figura.service';
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [ListarPreordenablesComponent, FormClienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ListarPreordenablesComponent,
    FormClienteComponent
  ],
  providers: [FiguraService],
})
export class FigurasModule { }
