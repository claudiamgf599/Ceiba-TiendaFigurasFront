import { by, element } from 'protractor';

export class PreordenesPage {

  private enlaceListarPreordenes = element(by.id("NavPreordenes"));
  private inputIdCliente = element(by.id("idCliente"));
  private btnConsultaPreordenes = element(by.id("btnConsultaPreordenes"));
  private bodyPreordenes = element.all((by.name("Preorden")));

  async obtenerNumeroBodyPreordenes() {
    return this.bodyPreordenes.count();
  }

  async clickEnlacePreordenes() {
    await this.enlaceListarPreordenes.click();
  }

  async clickBtnConsultarPreordenes() {
    await this.btnConsultaPreordenes.click();
  }

  async ingresarIdCliente(idCliente) {
    await this.inputIdCliente.sendKeys(idCliente);
  }

}
