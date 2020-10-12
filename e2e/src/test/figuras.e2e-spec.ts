import { browser, logging } from 'protractor';
import { AppPage } from '../app.po';
import { FigurasPage } from '../page/figuras/figuras.po';
import { Header } from '../page/header/header.po';

describe('workspace-project Figuras', () => {
  let page: AppPage;
  let headerNav: Header;
  let figurasPage: FigurasPage;

  beforeEach(() => {
    page = new AppPage();
    headerNav = new Header();
    figurasPage = new FigurasPage();
  });

  it('Cuando ingresa a la pagina debe mostrar las figuras preordenables', () => {
    page.navigateTo();
    headerNav.clickEnlaceFiguras();
    //browser.sleep(5000);
    expect(figurasPage.obtenerNumeroBodyFigurasPreordenables()).toBeGreaterThan(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

