import { Figura } from 'src/app/feature/figuras/shared/model/figura';
import { Cliente } from './cliente';

export class Preorden {
  id: number;
  figura: Figura;
  cliente: Cliente;
  fechaPreorden: string;
  precioPreorden: number;
  puedeCancelarPreorden: boolean;
}
