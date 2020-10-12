import { Component, OnInit } from '@angular/core';
import { Figura } from '../../shared/model/figura';
import { FiguraService } from '../../shared/service/figura.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-preordenables',
  templateUrl: './listar-preordenables.component.html',
  styleUrls: ['./listar-preordenables.component.css']
})
export class ListarPreordenablesComponent implements OnInit {

  figuras: Figura[] = [ ];

  constructor(private figuraService: FiguraService) { }

  ngOnInit(): void {
    this.figuraService.getFiguras().subscribe(
      figuras => this.figuras = figuras
    );
  }

}
