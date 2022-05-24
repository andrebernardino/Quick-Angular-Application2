// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';

describe('Quick_Angular_Application2 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: Quick_Angular_Application2', async () => {
    await page.navigateTo();
    expect(await page.getAppTitle()).toEqual('Quick_Angular_Application2');
  });
});
