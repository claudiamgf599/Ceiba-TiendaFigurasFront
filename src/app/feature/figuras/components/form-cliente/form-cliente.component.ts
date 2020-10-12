import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreordenService } from 'src/app/feature/preordenes/shared/service/preorden.service';
import Swal from 'sweetalert2';
import { FiguraService } from '../../shared/service/figura.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  idCliente: string;
  idFigura: string;
  titulo: string = "Preordenar Figura - Ingrese su identificación de cliente";
  constructor(private figuraService: FiguraService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private preordenService: PreordenService
  ) { }

  ngOnInit(): void {
    this.cargarIdFigura();
  }

  cargarIdFigura(): void{
    this.activatedRoute.params.subscribe(params => {
      let idFigura = params['idFigura']
      if(idFigura){
        this.idFigura = idFigura;
      }
    })
  }

  public generarPreorden(): void{
    this.preordenService.create(this.idFigura, this.idCliente).subscribe(preorden => {
      this.router.navigate([`/preordenes/${this.idCliente}`]);
      Swal.fire('Preorden generada con éxito', `Preorden con precio  ${preorden.precioPreorden} generada exitosamente`, 'success');
    })
  }

}
