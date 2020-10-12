import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPreordenesComponent } from './components/listar-preordenes/listar-preordenes.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PreordenService } from './shared/service/preorden.service';
import { FigurasModule } from '../figuras/figuras.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarPreordenesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FigurasModule,
    FormsModule
  ],
  exports: [
    ListarPreordenesComponent
  ],
  providers: [PreordenService],
})
export class PreordenesModule { }
