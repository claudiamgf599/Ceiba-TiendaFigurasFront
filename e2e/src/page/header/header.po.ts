import { by, element } from 'protractor';

export class Header {
  enlaceListarFiguras = element(by.id("NavFiguras"));
  enlaceListarPreordenes = element(by.id("NavPreordenes"));

  async clickEnlaceFiguras() {
    await this.enlaceListarFiguras.click();
  }

  async clickEnlacePreordenes() {
    await this.enlaceListarPreordenes.click();
  }
}
