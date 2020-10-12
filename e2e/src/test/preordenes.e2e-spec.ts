import { browser, logging } from 'protractor';
import { AppPage } from '../app.po';
import { FigurasPage } from '../page/figuras/figuras.po';
import { Header } from '../page/header/header.po';
import { PreordenesPage } from '../page/preordenes/preordenes.po';

describe('workspace-project Preordenes', () => {
  let page: AppPage;
  let preordenesPage: PreordenesPage;

  beforeEach(() => {
    page = new AppPage();
    preordenesPage = new PreordenesPage();
  });

  it('Cuando ingresa a la pagina debe mostrar el formulario de consulta de preordenes y consultar las preordenes', () => {
    page.navigateTo();
    preordenesPage.clickEnlacePreordenes();
    browser.sleep(5000);
    preordenesPage.ingresarIdCliente("C43259599");
    browser.sleep(1000);
    preordenesPage.clickBtnConsultarPreordenes();
    browser.sleep(1000);
    expect(preordenesPage.obtenerNumeroBodyPreordenes()).toBeGreaterThan(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
