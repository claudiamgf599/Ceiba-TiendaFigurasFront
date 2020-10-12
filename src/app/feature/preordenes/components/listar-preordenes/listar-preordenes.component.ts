import { Component, OnInit } from '@angular/core';
import { Preorden } from '../../shared/model/preorden';
import { PreordenService } from '../../shared/service/preorden.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-preordenes',
  templateUrl: './listar-preordenes.component.html',
  styleUrls: ['./listar-preordenes.component.css']
})
export class ListarPreordenesComponent implements OnInit {

  preordenes: Preorden[] = [];

  idCliente: string = "";

  constructor(private preordenService: PreordenService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.activatedRoute.params.subscribe(params => {
      let idCliente = params['idCliente']
      if(idCliente != 'form'){
        this.idCliente = idCliente;
      }
    })

    console.log('INIT ListarPreordenesComponent |'+ this.idCliente + "|" + this.idCliente.length);
    if(this.idCliente){
      this.preordenService.getPreordenes(this.idCliente).subscribe(
        preordenes => this.preordenes = preordenes
      );
    }
  }

  delete(preorden: Preorden): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro desea cancelar la preorden ${preorden.id} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.preordenService.delete(preorden.id).subscribe(
          response => {
            this.preordenService.getPreordenes(this.idCliente).subscribe(
              preordenes => this.preordenes = preordenes
            );
            swal.fire(
              'Cancelada!',
              'Su preorden ha sido cancelada.',
              'success'
            )
          }
        )
      }
    })
  }

  public listarPreordenes(): void{
    console.log("listarPreordenes");
    console.log(this.idCliente);
    this.preordenService.getPreordenes(this.idCliente).subscribe(preorden => {
      console.log("Retornó listarPreordenes");
      this.router.navigate([`/preordenes/${this.idCliente}`]);
    })
  }

}
