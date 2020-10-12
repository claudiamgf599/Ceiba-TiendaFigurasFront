import { by, element } from 'protractor';

export class FigurasPage {

  private bodyFiguras = element.all((by.name("FiguraPre")));

  async obtenerNumeroBodyFigurasPreordenables() {
    return this.bodyFiguras.count();
  }

}
